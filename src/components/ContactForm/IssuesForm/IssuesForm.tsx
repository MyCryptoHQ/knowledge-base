import { ChangeEvent, FunctionComponent } from 'react';
import { optional, pattern, string } from 'superstruct';
import Input from '../../ui/Input';
import Text from '../../ui/Text';
import Field from '../Field';

interface Props {
  values: Record<string, string>;
  errors: string[];

  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

export const IssuesObject = {
  address: optional(pattern(string(), /^(?:(?:0x[a-fA-F0-9]{40})|(?:.*\.eth))?$/)),
  subject: optional(string()),
  body: string(),
  attachment: optional(string())
};

const IssuesForm: FunctionComponent<Props> = ({ values, errors, onChange: handleChange }) => {
  return (
    <>
      <Field label="Your Ethereum address (optional)" hasError={errors.includes('address')}>
        <Input
          type="text"
          name="address"
          value={values.address || ''}
          onChange={handleChange}
          placeholder="e.g. 0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
        />
      </Field>

      <Field label="Subject (optional)" hasError={errors.includes('subject')}>
        <Input
          type="text"
          name="subject"
          value={values.subject || ''}
          onChange={handleChange}
          placeholder="e.g. Unable to send a transaction"
        />
      </Field>

      <Field label="More details" hasError={errors.includes('body')}>
        <Text small={true} noMargin={true}>
          Please include all the necessary info, so that we can help you. Not doing so may cause delays.{' '}
          <strong>Do not send us your private key.</strong>
        </Text>

        <Input
          as="textarea"
          name="body"
          value={values.body || ''}
          onChange={handleChange}
          placeholder='e.g. I was attempting to unlock by wallet but when I did I got the error message "Unknown Error: file is not defined." ...'
        />
      </Field>

      <Field label="Screenshot (optional)" hasError={errors.includes('attachment')}>
        <Text small={true} noMargin={true}>
          Image files only. Do not send your private key or passport. Do not send a screenshot of your transaction
          history, but include a link instead.
        </Text>

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

export default IssuesForm;
