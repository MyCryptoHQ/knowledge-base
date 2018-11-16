import * as React from 'react';
import * as CopyToClipboard from 'react-copy-to-clipboard';

interface Props {
  text: string;
  icon: string;
  title: string;

  onCopy?(): void;
}

const DonationButton: React.StatelessComponent<Props> = ({ text, icon, title, onCopy }) => (
  <CopyToClipboard text={text} onCopy={onCopy}>
    <button className="donation-button">
      <span>
        <img src={icon} alt={`Icon for ${title}`} /> {title}
      </span>
    </button>
  </CopyToClipboard>
);

export default DonationButton;
