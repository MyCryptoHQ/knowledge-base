import { Input, Body } from '@mycrypto/ui';
import { ChangeEvent, FunctionComponent } from 'react';
import { optional, string } from 'superstruct';
import Field from '../Field';

interface Props {
  values: Record<string, string>;
  errors: string[];

  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

export const GeneralObject = {
  subject: optional(string()),
  body: string(),
  attachment: optional(string())
};

const GeneralForm: FunctionComponent<Props> = ({ values, errors, onChange: handleChange }) => {
  return (
    <>
      <Field label="Subject (optional)" hasError={errors.includes('subject')}>
        <Input
          type="text"
          name="subject"
          value={values.subject || ''}
          onChange={handleChange}
          placeholder="e.g. Question about MyCrypto Membership"
        />
      </Field>

      <Field label="More details" hasError={errors.includes('body')}>
        <Body>
          Please include all the necessary info, so that we can help you. Not doing so may cause delays.{' '}
          <strong>Do not send us your private key.</strong>
        </Body>

        <Input
          as="textarea"
          name="body"
          value={values.body || ''}
          onChange={handleChange}
          placeholder='e.g. I was attempting to unlock by wallet but when I did I got the error message "Unknown Error: file is not defined." ...'
        />
      </Field>

      <Field label="Screenshot (optional)" hasError={errors.includes('attachment')}>
        <Body>
          Image files only. Do not send your private key or passport. Do not send a screenshot of your transaction
          history, but include a link instead.
        </Body>

        <Input
          type="file"
          id="form-attachment"
          name="attachment"
          accept="image/x-png,image/gif,image/jpeg"
          value={values.attachment}
          onChange={handleChange}
        />
      </Field>
    </>
  );
};

export default GeneralForm;
