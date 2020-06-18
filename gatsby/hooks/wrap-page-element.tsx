import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import Layout from '../../src/components/Layout';

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => <Layout>{element}</Layout>;
