import { Banner } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export interface AlertProps {
  label: string;
}

export const Alert: FunctionComponent<AlertProps> = ({ label, children }) => (
  <Banner type="info" label={label}>
    {children}
  </Banner>
);
