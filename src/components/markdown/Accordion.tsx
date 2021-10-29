import { Accordion as UIAccordion, AccordionProps } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const Accordion: FunctionComponent<AccordionProps> = ({ children, ...props }) => (
  <UIAccordion marginBottom="4" {...props}>
    {children}
  </UIAccordion>
);
