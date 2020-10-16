import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
}

const YouTubeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  margin: 3rem 0;
`;

const YouTubeFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const YouTubeEmbed: FunctionComponent<Props> = ({ id }) => (
  <YouTubeContainer>
    <YouTubeFrame
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </YouTubeContainer>
);

export default YouTubeEmbed;
