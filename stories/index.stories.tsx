import { storiesOf } from '@storybook/react';
import * as ReactMarkdown from 'react-markdown';
import * as React from "react";

import {Fancy} from "../src";

storiesOf('About Fancy Boilerplate', module)
    .add('Introduction', () => <div>
        <ReactMarkdown source={require('../README.md').default} />
    </div>);


storiesOf('Button', module)
  .add('with text', () => <Fancy texto={"funciona"}/>);
