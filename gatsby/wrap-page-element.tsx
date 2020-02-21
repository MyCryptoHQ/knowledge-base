import React from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import Layout from '../src/components/Layout';

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => (
  <Layout>{element}</Layout>
);
