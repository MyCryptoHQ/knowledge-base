import FeedbackForm from '../components/ContactForm/FeedbackForm';
import GeneralForm from '../components/ContactForm/GeneralForm';

export enum FormType {
  GENERAL_INQUIRIES = 0,
  ISSUES = 1,
  FEEDBACK = 2
}

export const FORM_TYPES = {
  [FormType.GENERAL_INQUIRIES]: {
    name: 'General Inquiries',
    component: GeneralForm
  },
  [FormType.ISSUES]: {
    name: 'Issues with MyCrypto or the blockchain',
    component: GeneralForm
  },
  [FormType.FEEDBACK]: {
    name: 'Feedback about MyCrypto',
    component: FeedbackForm
  }
};

export const FORM_SUBJECTS = [
  'Accessing wallet',
  'Adding tokens',
  'Coinbase buy widget',
  'ENS',
  'Exchanging / exchanges',
  'Getting started',
  'Keystore file',
  'Ledger or TREZOR',
  'Lost ETH / phishing / scam',
  'Lost password',
  'Lost private key',
  'MetaMask',
  'Nodes / networks',
  'Private key',
  'Sending transactions',
  'Sending tokens',
  'Swap',
  'Other'
];
