import * as moment from 'moment';

/**
 * Format a date as calendar time (e.g. 'yesterday', 'last wednesday')
 * @param {string} date
 * @return {string}
 */
export const formatDate = (date: string): string => {
  return moment.utc(date).calendar(undefined, {
    sameDay: '[Today]',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'YYYY/MM/DD'
  });
};
