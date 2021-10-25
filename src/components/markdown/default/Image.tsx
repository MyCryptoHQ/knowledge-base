import { Image as UIImage } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export interface ImageProps {
  float?: 'left' | 'right';
  max?: string;
}

export const Image: FunctionComponent<ImageProps> = ({ float, max = '100%', children, ...props }) => (
  <UIImage
    maxWidth={max}
    maxHeight={max}
    marginY={float && '4'}
    marginRight={['auto', null, float === 'left' ? '4' : '0']}
    marginLeft={['auto', null, float === 'right' ? '4' : '0']}
    display={['block', null, 'initial']}
    sx={{ float: ['none', null, float], borderRadius: 'badge' }}
    {...props}
  >
    {children}
  </UIImage>
);
