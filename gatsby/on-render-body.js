import React from 'react';

/**
 * Add Google Recaptcha script to the page.
 * @param setPostBodyComponents
 * @return {*}
 */
export default function onRenderBody({ setPostBodyComponents }) {
  return setPostBodyComponents([
    <script
      key="google-recaptcha-api"
      type="text/javascript"
      async={true}
      defer={true}
      src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    />
  ]);
}
