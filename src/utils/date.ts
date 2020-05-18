import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

/**
 * Format a date as string
 *
 * @param {string} date
 * @return {string}
 */
export const formatDate = (date: string): string => {
  const parsedDate = parseISO(date);
  return format(parsedDate, 'PPP');
};
