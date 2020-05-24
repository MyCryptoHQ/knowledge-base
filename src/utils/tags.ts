export const encodeTag = (tag: string): string => {
  return tag.toLowerCase().replace(/\s/g, '-');
};
