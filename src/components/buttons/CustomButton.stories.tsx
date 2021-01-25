import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { AiFillApple } from 'react-icons/ai';

import CustomButton from './CustomButton';
import { ButtonProps } from '@chakra-ui/react';

export default {
  component: CustomButton,
  title: 'CustomButton',
} as Meta;

export const Example: Story = () => (
  <CustomButton leftIcon={<AiFillApple />}>Get apps on AppStore</CustomButton>
);

export const Custom: Story<ButtonProps> = ({
  children,
  ...restProps
}: ButtonProps) => <CustomButton {...restProps}>{children}</CustomButton>;

Custom.argTypes = {
  backgroundColor: {
    control: {
      type: 'color',
    },
  },
  children: {
    control: {
      type: 'text',
    },
    defaultValue: 'Button',
  },
  color: {
    control: {
      type: 'color',
    },
  },
  leftIcon: {
    defaultValue: <AiFillApple />,
  },
};
