import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Logo from './Logo';
import { BoxProps } from '@chakra-ui/react';

export default {
  component: Logo,
  title: 'Logo',
} as Meta;

export const Example: Story = () => <Logo />;

export const Custom: Story<BoxProps> = (args: BoxProps) => <Logo {...args} />;

Custom.argTypes = {
  width: {
    control: {
      type: 'number',
    },
    defaultValue: 200,
  },
  height: {
    control: {
      type: 'number',
    },
    defaultValue: 200,
  },
};
