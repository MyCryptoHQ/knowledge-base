import { Button, Icon, IconType } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export interface CategoryButtonProps {
  icon: IconType;
}

export const CategoryButton: FunctionComponent<CategoryButtonProps> = ({ icon, children }) => (
  <Button backgroundColor="link" marginTop="16px" marginRight="14px" paddingX="3" paddingY="20px" fontWeight="bold">
    <Icon type={icon} fill="white" width="24px" mr="10px" />
    {children}
  </Button>
);
