import { intersection, object, pattern, string } from 'superstruct';
import FeedbackForm, { FeedbackObject } from '../components/ContactForm/FeedbackForm';
import GeneralForm, { GeneralObject } from '../components/ContactForm/GeneralForm';
import IssuesForm, { IssuesObject } from '../components/ContactForm/IssuesForm';

const FormObject = object({
  name: string(),
  email: pattern(string(), /^\S+@\S+$/)
});

export enum FormType {
  GENERAL_INQUIRIES = 0,
  ISSUES = 1,
  FEEDBACK = 2
}

export const FORM_TYPES = {
  [FormType.GENERAL_INQUIRIES]: {
    name: 'General Inquiries',
    component: GeneralForm,
    schema: intersection([FormObject, GeneralObject])
  },
  [FormType.ISSUES]: {
    name: 'Issues with MyCrypto or the blockchain',
    component: IssuesForm,
    schema: intersection([FormObject, IssuesObject])
  },
  [FormType.FEEDBACK]: {
    name: 'Feedback about MyCrypto',
    component: FeedbackForm,
    schema: intersection([FormObject, FeedbackObject])
  }
};
