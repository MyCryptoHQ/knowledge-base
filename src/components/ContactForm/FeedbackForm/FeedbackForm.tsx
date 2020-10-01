import React, { ChangeEvent, FunctionComponent } from 'react';
import Input from '../../ui/Input';
import Text from '../../ui/Text';
import Field from '../Field';

interface Props {
  values: Record<string, string>;
  errors: string[];

  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

const FeedbackForm: FunctionComponent<Props> = ({ values, errors, onChange: handleChange }) => {
  return (
    <>
      <Field label="Your Feedback" hasError={errors.includes('body')}>
        <Text small={true} noMargin={true}>
          Thank you for taking the time to provide feedback, it is highly appreciated.
        </Text>

        <Input
          as="textarea"
          name="body"
          value={values.body}
          onChange={handleChange}
          placeholder='e.g. I was attempting to unlock by wallet but when I did I got the error message "Unknown Error: file is not defined." ...'
        />
      </Field>
    </>
  );
};

export default FeedbackForm;
