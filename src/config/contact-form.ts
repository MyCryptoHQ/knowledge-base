import { object, pattern, string } from 'superstruct';
import FeedbackForm, { FeedbackObject } from '../components/ContactForm/FeedbackForm';
import GeneralForm, { GeneralObject } from '../components/ContactForm/GeneralForm';
import IssuesForm, { IssuesObject } from '../components/ContactForm/IssuesForm';

const FormObject = {
  name: string(),
  email: pattern(string(), /^\S+@\S+$/)
};

export enum FormType {
  GeneralInquiries = 0,
  Issues = 1,
  Feedback = 2
}

export const FORM_TYPES = {
  [FormType.GeneralInquiries]: {
    name: 'General Inquiries',
    component: GeneralForm,
    schema: object({ ...FormObject, ...GeneralObject })
  },
  [FormType.Issues]: {
    name: 'Issues with MyCrypto or the blockchain',
    component: IssuesForm,
    schema: object({ ...FormObject, ...IssuesObject })
  },
  [FormType.Feedback]: {
    name: 'Feedback about MyCrypto',
    component: FeedbackForm,
    schema: object({ ...FormObject, ...FeedbackObject })
  }
};
