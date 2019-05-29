import { storiesOf } from '@storybook/react';

import * as React from "react";
import {Fancy} from "../src";

storiesOf('Button', module)
  .add('with text', () => <Fancy texto={"funciona"}/>);
