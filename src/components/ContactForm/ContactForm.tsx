import { Button } from '@mycrypto/ui';
import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import Recaptcha from 'react-google-recaptcha';
import { object, string, ValidationError } from 'yup';
import { FORM_SUBJECTS, FORM_TYPES, FormType } from '../../config/contact-form';
import { useSiteMetadata } from '../../hooks';
import Input from '../ui/Input';
import Text from '../ui/Text';
import Field from './Field';

interface FormData {
  name: string;
  email: string;
  address: string;
  subject: string;
  body: string;
  attachment: string;

  [key: string]: string;
}

const schema = object<FormData>().shape({
  name: string().required(),
  email: string()
    .email()
    .required(),
  address: string().matches(/^(?:(?:0x[a-fA-F0-9]{40})|(?:.*\.eth))?$/),
  subject: string().required(),
  body: string().required(),
  attachment: string()
});

const ContactForm: FunctionComponent = () => {
  const [type, setType] = useState<FormType>(FormType.GENERAL_INQUIRIES);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    address: '',
    subject: FORM_SUBJECTS[0],
    body: '',
    attachment: ''
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isVerified, setVerified] = useState<boolean>(false);
  const { recaptchaSitekey } = useSiteMetadata();

  const handleChangeType = (event: ChangeEvent<HTMLInputElement>) => {
    setType((event.target.value as unknown) as FormType);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  const Component = FORM_TYPES[type].component;

  return (
    <form
      method="post"
      encType="multipart/form-data"
      acceptCharset="utf-8"
      action="https://webhook.frontapp.com/forms/myetherwallet/tMA_4BxSeE05bwxsN62-Ue5xP4jz_W7LGlgKNgGTKEchjFw7-6M8q-9q9ZqxsSYDl2BXv7Gx17Vqev1Km0akl8qVZtPM5LYl"
      onSubmit={handleSubmit}>
      <Field label="Your name" hasError={errors.includes('name')}>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Taylor" />
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

      <Field label="Type" hasError={errors.includes('subject')}>
        <Input as="select" name="type" value={type} onChange={handleChangeType}>
          {Object.entries(FORM_TYPES).map(([type, { name }], index) => (
            <option key={`type-${index}`} value={type}>
              {name}
            </option>
          ))}
        </Input>
      </Field>

      <Component values={formData} errors={errors} onChange={handleChange} />

      <Field label="Captcha" hasError={errors.includes('captcha')}>
        <Text noMargin={true}>Sorry, we just need to make sure you are human.</Text>

        <Recaptcha sitekey={recaptchaSitekey} onChange={handleVerify} onExpired={handleExpired} />

        {errors.includes('captcha') ? <Text>Please complete the captcha.</Text> : null}
      </Field>

      <Button type="submit">Send message</Button>
    </form>
  );
};

export default ContactForm;
