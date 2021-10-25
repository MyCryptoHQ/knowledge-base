import { Input, Body } from '@mycrypto/ui';
import { ChangeEvent, FunctionComponent } from 'react';
import { string } from 'superstruct';
import Field from '../Field';

interface Props {
  values: Record<string, string>;
  errors: string[];

  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

export const FeedbackObject = {
  body: string()
};

const FeedbackForm: FunctionComponent<Props> = ({ values, errors, onChange: handleChange }) => (
  <>
    <input type="hidden" name="subject" value="Feedback about MyCrypto" />

    <Field label="Your Feedback" hasError={errors.includes('body')}>
      <Body>Thank you for taking the time to provide feedback, it is highly appreciated.</Body>

      <Input as="textarea" name="body" value={values.body || ''} onChange={handleChange} />
    </Field>
  </>
);

export default FeedbackForm;
