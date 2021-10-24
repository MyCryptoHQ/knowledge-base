import { FunctionComponent } from 'react';

export const EmphasizedText: FunctionComponent = ({ children, ...props }) => <em {...props}>{children}</em>;
