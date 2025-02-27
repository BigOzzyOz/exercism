/**
 * Escapes special regex characters in a string.
 * 
 * @param {string} string - The input string to escape.
 * @returns {string} The escaped string.
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Wraps the given text in an HTML tag.
 *
 * @param {string} text - The text to wrap.
 * @param {string} tag - The tag to wrap the text with.
 * @returns {string} The wrapped text.
 */
function wrap(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

/**
 * Converts markdown delimiters to HTML tags using regex replacement.
 * Handles multiple occurrences and nested tags through non-greedy matching.
 *
 * @param {string} markdown - A line of markdown text
 * @param {string} delimiter - The delimiter to replace (e.g. '__')
 * @param {string} tag - The HTML tag to use (e.g. 'strong')
 * @returns {string} The converted HTML string
 */
function parser(markdown, delimiter, tag) {
  const escapedDelimiter = escapeRegExp(delimiter);
  const pattern = new RegExp(`${escapedDelimiter}(.+?)${escapedDelimiter}`, 'g');
  return markdown.replace(pattern, `<${tag}>$1</${tag}>`);
}

/**
 * Converts __ delimiters to <strong> tags.
 * 
 * @param {string} markdown - Input markdown text
 * @returns {string} HTML with strong tags
 */
function parse__(markdown) {
  return parser(markdown, '__', 'strong');
}

/**
 * Converts _ delimiters to <em> tags.
 * 
 * @param {string} markdown - Input markdown text
 * @returns {string} HTML with em tags
 */
function parse_(markdown) {
  return parser(markdown, '_', 'em');
}

/**
 * Applies markdown parsing and wraps in paragraph if needed.
 * Processing order: strong -> em to handle nested tags correctly.
 *
 * @param {string} markdown - Text to parse
 * @param {boolean} list - Whether in list context
 * @returns {string} Parsed HTML content
 */
function parseText(markdown, list) {
  const parsedText = parse_(parse__(markdown));
  return list ? parsedText : wrap(parsedText, 'p');
}

/**
 * Parses headers with validation for proper format.
 * Requires space after #s and counts 1-6.
 *
 * @param {string} markdown - Potential header line
 * @param {boolean} list - Current list state
 * @returns {[string|null, boolean]} Tuple with result and new list state
 */
function parseHeader(markdown, list) {
  let count = 0;
  while (count < markdown.length && markdown[count] === '#') count++;

  if (count === 0 || count > 6 || markdown[count] !== ' ') {
    return [null, list];
  }

  const content = markdown.slice(count + 1);
  const header = wrap(content, `h${count}`);

  return list ?
    [`</ul>${header}`, false] :
    [header, false];
}

/**
 * Parses list items with strict '*' + space requirement.
 *
 * @param {string} markdown - Potential list item
 * @param {boolean} list - Current list state
 * @returns {[string|null, boolean]} Tuple with result and new list state
 */
function parseLineItem(markdown, list) {
  if (!markdown.startsWith('* ')) return [null, list];

  const content = parseText(markdown.substring(2), true);
  const listItem = wrap(content, 'li');

  return list ?
    [listItem, true] :
    [`<ul>${listItem}`, true];
}

/**
 * Handles paragraph conversion with list state awareness.
 *
 * @param {string} markdown - Text to wrap as paragraph
 * @param {boolean} list - Current list state
 * @returns {[string, boolean]} Tuple with result and new list state
 */
function parseParagraph(markdown, list) {
  const content = parseText(markdown, false);
  return list ? [`</ul>${content}`, false] : [content, false];
}

/**
 * Orchestrates parsing with priority: header > list > paragraph.
 *
 * @param {string} markdown - Line to parse
 * @param {boolean} list - Current list state
 * @returns {[string, boolean]} Tuple with result and new state
 * @throws {Error} For unrecognized markdown
 */
function parseLine(markdown, list) {
  const [headerResult, headerList] = parseHeader(markdown, list);
  if (headerResult !== null) return [headerResult, headerList];

  const [listResult, listList] = parseLineItem(markdown, list);
  if (listResult !== null) return [listResult, listList];

  const [paraResult, paraList] = parseParagraph(markdown, list);
  if (paraResult !== null) return [paraResult, paraList];

  throw new Error('Invalid markdown');
}

/**
 * Main entry point converts full markdown document to HTML.
 * Maintains list state between lines and closes open lists.
 *
 * @param {string} markdown - Complete markdown document
 * @returns {string} Final HTML output
 */
export function parse(markdown) {
  const lines = markdown.split('\n');
  let html = '';
  let listActive = false;

  for (const line of lines) {
    const [lineHtml, newListState] = parseLine(line, listActive);
    html += lineHtml;
    listActive = newListState;
  }

  return listActive ?
    `${html}</ul>` :
    html;
}
