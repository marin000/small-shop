export const truncateText = (text: string, maxLength: number) => {
  const truncated = text.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // Takes care to not cut the sentence in the middle of the word
  return lastSpaceIndex !== -1
    ? truncated.slice(0, lastSpaceIndex)
    : truncated;
};
