//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// const regQuestion = /[a-z0-9]\?$/g;
// const regShout = /[A-Z]{2,}/g;
// const regShoutQuestion = /[^a-z]{2,}[^0-9]\?$/g;
// const regSilence = /\s{2,}/g;

export const hey = (message) => {
  // My first solution
  // let messageArray = message.split('');
  // const smallLetters = messageArray.filter((char) => char.match(/[a-z]/));
  // const bigLetters = messageArray.filter((char) => char.match(/[A-Z]/));
  // const whitespace = messageArray.filter((char) => char.match(/\s/));
  // const numbers = messageArray.filter((char) => char.match(/[0-9]/));
  // const symbols = messageArray.filter((char) => char.match(/[^\w\s]/));

  // if (messageArray[messageArray.length - 1]?.match(/\s/) || message === '') {
  //   if (message === '') return 'Fine. Be that way!';
  //   else {
  //     for (let i = 0; i < messageArray.length; i++) {
  //       if ((smallLetters.length > 0 || bigLetters.length > 0) && messageArray[messageArray.length - 1].match(/\s/)) messageArray.pop();
  //       else break;
  //     }
  //   };
  // }

  // if (messageArray[messageArray.length - 1] === '?') {
  //   if (smallLetters.length === 0 && bigLetters.length === 0 && numbers.length === 0 && symbols.length - 1 === 0) return 'Fine. Be that way!';
  //   else if (bigLetters.length > 0 && smallLetters.length === 0) return 'Calm down, I know what I\'m doing!';
  //   else return 'Sure.';
  // } else if (whitespace.length >= smallLetters.length + bigLetters.length + numbers.length + symbols.length === 0) return 'Fine. Be that way!';
  // else if (bigLetters.length > 0 && smallLetters.length === 0) return 'Whoa, chill out!';
  // else if (smallLetters.length === 0 && bigLetters.length === 0 && numbers.length === 0 && whitespace.length > 0) return 'Fine. Be that way!';
  // else return 'Whatever.';

  // Solution with deepseek
  const trimmedMsg = message.trim();
  const isQuestion = trimmedMsg.endsWith('?');
  const isSilent = trimmedMsg === '';
  const hasLetters = /[A-Za-z]/.test(trimmedMsg);
  const isShouting = hasLetters && trimmedMsg === trimmedMsg.toUpperCase();

  if (isSilent) return 'Fine. Be that way!';
  if (isShouting && isQuestion) return 'Calm down, I know what I\'m doing!';
  if (isShouting) return 'Whoa, chill out!';
  if (isQuestion) return 'Sure.';
  return 'Whatever.';
};
