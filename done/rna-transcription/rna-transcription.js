//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  return dna.split('').map((nucleotide) => DNA_TO_RNA[nucleotide]).join('');
};

const DNA_TO_RNA = {
  C: 'G',
  G: 'C',
  T: 'A',
  A: 'U',
};
