import remark from 'remark';
import stripMarkdown from 'strip-markdown';

/**
 * Remove markdown characters from a raw markdown file.
 */
export const removeMarkdown = (markdown: string): string => {
  const body = markdown
    .match(/^---\n.*---\n(.*)/s)![1]
    .replace(/\n/g, ' ')
    .trim();
  const { contents } = remark().use(stripMarkdown).processSync(body);

  return contents as string;
};
