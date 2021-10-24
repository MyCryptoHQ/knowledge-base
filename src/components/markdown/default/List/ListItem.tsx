import { Body } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const ListItem: FunctionComponent = ({ children, ...props }) => (
  <Body as="li" paddingLeft="2" marginY="2" sx={{ 'ul, li': { marginLeft: '-10px' } }} {...props}>
    {children}
  </Body>
);
