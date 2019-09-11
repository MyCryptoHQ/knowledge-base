import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { object, string, ValidationError } from 'yup';
import { Button, Dropdown, Input } from '@mycrypto/ui';
import Recaptcha from 'react-google-recaptcha';
import { useSiteMetadata } from '../../hooks';
import Field from './Field';
import Text from '../ui/Text';

interface FormData {
  name: string;
  email: string;
  address: string;
  subject: string;
  body: string;
  attachment: string;
}

const schema = object<FormData>().shape({
  name: string().required(),
  email: string()
    .email()
    .required(),
  address: string().matches(/^(?:0x[a-fA-F0-9]{40})?$/),
  subject: string()
    .min(0)
    .required(),
  body: string().required(),
  attachment: string()
});

const ContactForm: FunctionComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    address: '',
    subject: '',
    body: '',
    attachment: ''
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isVerified, setVerified] = useState<boolean>(false);
  const { recaptchaSitekey } = useSiteMetadata();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

    if (errors.includes(event.target.name)) {
      setErrors(errors.filter(error => error !== event.target.name));
    }
  };

  const handleVerify = () => {
    setVerified(true);
    setErrors(errors.filter(error => error !== 'captcha'));
  };

  const handleExpired = () => {
    setVerified(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!isVerified) {
      setErrors([...errors, 'captcha']);
    }

    schema
      .validate(formData, { abortEarly: false })
      .then(() => {
        form.submit();
      })
      .catch((error: ValidationError) => {
        setErrors([...errors, ...error.inner.map(innerError => innerError.path)]);
      });
  };

  return (
    <form
      method="post"
      encType="multipart/form-data"
      acceptCharset="utf-8"
      action="https://webhook.frontapp.com/forms/myetherwallet/tMA_4BxSeE05bwxsN62-Ue5xP4jz_W7LGlgKNgGTKEchjFw7-6M8q-9q9ZqxsSYDl2BXv7Gx17Vqev1Km0akl8qVZtPM5LYl"
      onSubmit={handleSubmit}
    >
      <Field label="Your name" hasError={errors.includes('name')}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Taylor"
        />
      </Field>

      <Field label="Your email" hasError={errors.includes('email')}>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. support@mycrypto.com"
        />
      </Field>

      <Field label="Your Ethereum address (optional)" hasError={errors.includes('address')}>
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="e.g. 0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
        />
      </Field>

      <Field label="Subject" hasError={errors.includes('subject')}>
        {/* TODO: This does not work right now */}
        <Dropdown
          items={
            new Set([
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
            ])
          }
        />
      </Field>

      <Field label="More details" hasError={errors.includes('body')}>
        <Text noMargin={true}>
          Please include all the necessary info, so that we can help you. Not doing so may cause
          delays. <strong>Do not send us your private key.</strong>
        </Text>

        <Input
          as="textarea"
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="e.g. I was attempting to unlock by wallet but when I did I got the error message &quot;Unknown Error: file is not defined.&quot; ..."
        />
      </Field>

      <Field label="Screenshot (optional)" hasError={errors.includes('attachment')}>
        <Text noMargin={true}>
          Image files only. Do not send your private key or passport. Do not send a screenshot of
          your transaction history, but include a link instead.
        </Text>

        <Input
          type="file"
          id="form-attachment"
          name="attachment"
          accept="image/x-png,image/gif,image/jpeg"
          value={formData.attachment}
          onChange={handleChange}
        />
      </Field>

      <Field label="Captcha" hasError={errors.includes('captcha')}>
        <Text noMargin={true}>Sorry, we just need to make sure you are human.</Text>

        <Recaptcha sitekey={recaptchaSitekey} onChange={handleVerify} onExpired={handleExpired} />

        {errors.includes('captcha') ? <Text>Please complete the captcha.</Text> : null}
      </Field>

      {/*<div className={`field full-width ${errors.includes('subject') ? 'error' : ''}`}>
        <label htmlFor="form-subject">Subject</label>
        <select id="form-subject" name="subject" value={formData.subject} onChange={handleChange}>
          <option value="">What can we help you with?</option>
          <option>Accessing wallet</option>
          <option>Adding tokens</option>
          <option>Coinbase buy widget</option>
          <option>ENS</option>
          <option>Exchanging / exchanges</option>
          <option>Getting started</option>
          <option>Keystore file</option>
          <option>Ledger or TREZOR</option>
          <option>Lost ETH / phishing / scam</option>
          <option>Lost password</option>
          <option>Lost private key</option>
          <option>MetaMask</option>
          <option>Nodes / networks</option>
          <option>Private key</option>
          <option>Sending transactions</option>
          <option>Sending tokens</option>
          <option>Swap</option>
          <option>Other</option>
        </select>
      </div>*/}

      <Button type="submit">Send message</Button>
    </form>
  );
};

export default ContactForm;
