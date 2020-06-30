import { WrapPageElementBrowserArgs } from 'gatsby';
import React, { ReactElement } from 'react';
import Layout from '../../src/components/Layout';

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs): ReactElement => <Layout>{element}</Layout>;
