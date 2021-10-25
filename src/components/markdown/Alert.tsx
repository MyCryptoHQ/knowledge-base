import { Banner, Box } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export interface AlertProps {
  label: string;
}

export const Alert: FunctionComponent<AlertProps> = ({ label, children }) => (
  <Box marginBottom="4" sx={{ 'p:last-of-type': { marginBottom: '0' } }}>
    <Banner type="info" label={label} extendable={false}>
      {children}
    </Banner>
  </Box>
);
