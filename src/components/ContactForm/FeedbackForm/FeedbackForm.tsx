import React, { ChangeEvent, FunctionComponent } from 'react';
import { object, string } from 'superstruct';
import Input from '../../ui/Input';
import Text from '../../ui/Text';
import Field from '../Field';

interface Props {
  values: Record<string, string>;
  errors: string[];

  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

export const FeedbackObject = object({
  body: string()
});

const FeedbackForm: FunctionComponent<Props> = ({ values, errors, onChange: handleChange }) => {
  return (
    <>
      <Field label="Your Feedback" hasError={errors.includes('body')}>
        <Text small={true} noMargin={true}>
          Thank you for taking the time to provide feedback, it is highly appreciated.
        </Text>

        <Input as="textarea" name="body" value={values.body} onChange={handleChange} />
      </Field>
    </>
  );
};

export default FeedbackForm;
