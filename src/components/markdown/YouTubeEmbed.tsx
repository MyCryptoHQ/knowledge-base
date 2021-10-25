import { Box } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export interface YoutubeEmbedProps {
  id: string;
}

export const YouTubeEmbed: FunctionComponent<YoutubeEmbedProps> = ({ id }) => (
  <Box
    width="100%"
    paddingBottom="56.25%"
    marginY="3rem"
    sx={{
      position: 'relative',
      '& > iframe': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none'
      }
    }}
  >
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Box>
);
