export const getSocialUrl = (pageUrl: string, platform: 'twitter' | 'facebook' | 'linkedin' | 'link') => {
  return encodeURIComponent(`${pageUrl}?utm_medium=social&utm_source=${platform}&utm_campaign=share`);
};
