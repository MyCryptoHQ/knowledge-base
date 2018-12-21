import * as React from 'react';
import Recaptcha from 'react-google-recaptcha';
import { object, string, ValidationError } from 'yup';
import { graphql, StaticQuery } from 'gatsby';

interface State {
  formData: {
    name: string;
    email: string;
    address: string;
    subject: string;
    body: string;
    attachment: string;
  };
  errors: string[];
  isVerified: boolean;
}

const schema = object().shape({
  name: string().required(),
  email: string()
    .email()
    .required(),
  address: string().matches(/^(?:0x[a-fA-F0-9]{40})?$/),
  subject: string()
    .min(1)
    .required(),
  body: string().required(),
  attachment: string()
});

export default class ContactForm extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      formData: {
        name: '',
        email: '',
        address: '',
        subject: '',
        body: '',
        attachment: ''
      },
      errors: [],
      isVerified: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleVerify = this.handleVerify.bind(this);
    this.handleExpired = this.handleExpired.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { errors } = this.state;
    return (
      <form
        method="post"
        encType="multipart/form-data"
        acceptCharset="utf-8"
        action="https://webhook.frontapp.com/forms/myetherwallet/466ecd326b1dc5f079cd546acb782026135f0527827c1a484423a5f5918e289aaf366ae37a303d78868c2252216a2340"
        onSubmit={this.handleSubmit}
      >
        <div className={`field full-width ${errors.includes('name') ? 'error' : ''}`}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            value={this.state.formData.name}
            onChange={this.handleChange}
            placeholder="e.g. Taylor"
          />
        </div>

        <div className={`field full-width ${errors.includes('email') ? 'error' : ''}`}>
          <label htmlFor="form-email">Your email</label>
          <input
            type="text"
            id="form-email"
            name="email"
            value={this.state.formData.email}
            onChange={this.handleChange}
            placeholder="e.g. support@mycrypto.com"
          />
        </div>

        <div className={`field full-width ${errors.includes('address') ? 'error' : ''}`}>
          <label htmlFor="form-address">Your Ethereum address</label>
          <input
            type="text"
            id="form-address"
            name="address"
            value={this.state.formData.address}
            onChange={this.handleChange}
            placeholder="e.g. 0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
          />
        </div>

        <div className={`field full-width ${errors.includes('subject') ? 'error' : ''}`}>
          <label htmlFor="form-subject">Subject</label>
          <select
            id="form-subject"
            name="subject"
            value={this.state.formData.subject}
            onChange={this.handleChange}
          >
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
        </div>

        <div className={`field full-width ${errors.includes('body') ? 'error' : ''}`}>
          <label htmlFor="form-body">More details</label>
          <p>
            Please include all the necessary info, so that we can help you. Not doing so may cause
            delays. <strong>Do not send us your private key.</strong>
          </p>
          <textarea
            id="form-body"
            name="body"
            value={this.state.formData.body}
            onChange={this.handleChange}
            placeholder="e.g. I was attempting to unlock by wallet but when I did I got the error message &quot;Unknown Error: file is not defined.&quot; ..."
          />
        </div>

        <div className={`field full-width ${errors.includes('attachment') ? 'error' : ''}`}>
          <label htmlFor="form-attachment">Screenshot</label>
          <p>
            Image files only. Do not send your private key or passport. Do not send a screenshot of
            your transaction history, but include a link instead.
          </p>
          <input
            type="file"
            id="form-attachment"
            name="attachment"
            accept="image/x-png,image/gif,image/jpeg"
            value={this.state.formData.attachment}
            onChange={this.handleChange}
          />
        </div>

        <div className="field full-width">
          <label>Captcha</label>
          <p>Sorry, we just need to make sure you are human.</p>
          <StaticQuery
            query={graphql`
              query SiteKey {
                site {
                  siteMetadata {
                    recaptchaSitekey
                  }
                }
              }
            `}
            render={data => (
              <Recaptcha
                sitekey={data.site.siteMetadata.recaptchaSitekey}
                onChange={this.handleVerify}
                onExpired={this.handleExpired}
              />
            )}
          />
          {errors.includes('captcha') ? <p>Please complete the captcha.</p> : null}
        </div>

        <input type="submit" value="Send message" className="button primary" />
      </form>
    );
  }

  handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });

    if (this.state.errors.includes(event.target.name)) {
      this.setState({
        errors: this.state.errors.filter(error => error !== event.target.name)
      });
    }
  }

  handleVerify() {
    this.setState({
      isVerified: true
    });

    this.setState({
      errors: this.state.errors.filter(error => error !== 'captcha')
    });
  }

  handleExpired() {
    this.setState({
      isVerified: false
    });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const { formData, isVerified } = this.state;

    if (!isVerified) {
      this.setState({
        errors: ['captcha']
      });
    }

    schema
      .validate(formData, { abortEarly: false })
      .then(() => {
        form.submit();
      })
      .catch((error: ValidationError) => {
        this.setState({
          errors: [...this.state.errors, ...error.inner.map(innerError => innerError.path)]
        });
      });
  }
}
