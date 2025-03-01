// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  // Shorter and more readable solution:
  return command.toLowerCase().startsWith('chatbot');
  // Solution with regular expressions:
  // const regExp = /chatbot/i;
  // let test = command.match(regExp);
  // return test?.index === 0;
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  return message.replace(/emoji\d+/gi, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const regExp = /\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}/;
  return regExp.test(number)
    ? 'Thanks! You can now download me to your phone.'
    : `Oops, it seems like I can't reach out to ${number}`;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const regExp = /[a-zA-Z0-9]+\.[a-z]{2,3}/gi;
  return userInput.match(regExp);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const regExp = /(\w+),\s(\w+)/;
  return `Nice to meet you, ${fullName.replace(regExp, '$2 $1')}`;
}
