interface HeaderItem {
  title: string;
  to: string;
  external?: boolean;
}

export const LEFT_HEADER_ITEMS: HeaderItem[] = [
  {
    title: 'MyCrypto.com',
    to: 'https://mycrypto.com',
    external: true
  },
  {
    title: 'Latest news',
    to: 'https://medium.com/@mycrypto',
    external: true
  }
];

export const NAVIGATION_ITEMS: HeaderItem[] = [
  {
    title: 'Knowledge Base',
    to: '/'
  },
  /*{
    title: 'Troubleshooting',
    to: '/tools/troubleshooting'
  },*/
  {
    title: 'Contact Us',
    to: '/contact-us'
  }
];
