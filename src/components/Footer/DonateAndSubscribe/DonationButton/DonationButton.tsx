import * as React from 'react';

interface Props {
  icon: string;
  title: string;
}

const DonationButton: React.StatelessComponent<Props> = ({ icon, title }) => (
  <button className="donation-button">
    <span>
      <img src={icon} alt={`Icon for ${title}`} /> {title}
    </span>
  </button>
);

export default DonationButton;
