import { storiesOf } from '@storybook/react';
import * as ReactMarkdown from 'react-markdown';
import * as React from "react";

import {Fancy} from "../src";

storiesOf('About Fancy Boilerplate', module)
    .add('with text', () => <ReactMarkdown source={require('../README.md')} />);

storiesOf('Button', module)
  .add('with text', () => <Fancy texto={"funciona"}/>);
