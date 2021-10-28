export const getSocialUrl = (
  siteUrl: string,
  slug: string,
  title: string,
  platform: 'twitter' | 'facebook' | 'linkedin' | 'link'
) => {
  const url = encodeURIComponent(`${siteUrl}/${slug}?utm_medium=social&utm_source=${platform}&utm_campaign=share`);

  switch (platform) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?t=${title}&u=${url}`;
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    case 'link':
      return `${siteUrl}/${slug}?utm_medium=social&utm_source=link&utm_campaign=share`;
  }
};
