import { Button } from '@mycrypto/ui';
import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import Recaptcha from 'react-google-recaptcha';
import { validate } from 'superstruct';
import { FORM_TYPES, FormType } from '../../config/contact-form';
import { useSiteMetadata } from '../../hooks';
import Input from '../ui/Input';
import Text from '../ui/Text';
import Field from './Field';
import InlineField from './InlineField';

interface FormData {
  [key: string]: string;
}

const ContactForm: FunctionComponent = () => {
  const [type, setType] = useState<FormType>(FormType.GENERAL_INQUIRIES);
  const [formData, setFormData] = useState<FormData>({});
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
      setErrors(errors.filter((error) => error !== event.target.name));
    }
  };

  const handleVerify = () => {
    setVerified(true);
    setErrors(errors.filter((error) => error !== 'captcha'));
  };

  const handleExpired = () => {
    setVerified(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const schema = FORM_TYPES[type].schema;

    const [error] = validate(formData, schema);
    if (error) {
      setErrors((currentErrors) => [...currentErrors, ...(error.path as string[])]);
      return;
    }

    if (!isVerified) {
      setErrors((currentErrors) => [...currentErrors, 'captcha']);
      return;
    }

    form.submit();
  };

  const Component = FORM_TYPES[type].component;

  return (
    <form
      method="post"
      encType="multipart/form-data"
      acceptCharset="utf-8"
      action="https://webhook.frontapp.com/forms/myetherwallet/tMA_4BxSeE05bwxsN62-Ue5xP4jz_W7LGlgKNgGTKEchjFw7-6M8q-9q9ZqxsSYDl2BXv7Gx17Vqev1Km0akl8qVZtPM5LYl"
      onSubmit={handleSubmit}>
      <InlineField>
        <Field label="Your name" hasError={errors.includes('name')}>
          <Input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            placeholder="e.g. Taylor"
          />
        </Field>

        <Field label="Your email" hasError={errors.includes('email')}>
          <Input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            placeholder="e.g. support@mycrypto.com"
          />
        </Field>
      </InlineField>

      <Field label="Type">
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
