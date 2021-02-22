import Fancy from './Fancy';
import React from 'react';
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: 'Fancy',
  component: Fancy,
} as Meta

export const Initial = () => <Fancy texto={'Heeeyyy'}/>