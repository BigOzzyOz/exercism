//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  // regexp solution less efficient
  // let regexp = /^(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z).*$/gi;
  // return regexp.test(sentence.toLowerCase());
  const chars = new Set();
  const lowerStr = sentence.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (const c of lowerStr) {
    if (alphabet.includes(c)) chars.add(c);
  }
  return chars.size === 26;
};
