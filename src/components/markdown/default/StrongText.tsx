import { FunctionComponent } from 'react';

export const StrongText: FunctionComponent = ({ children, ...props }) => <strong {...props}>{children}</strong>;
