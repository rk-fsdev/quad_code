import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import LoadingIndicator, { Props } from './LoadingIndicator';

export default {
  component: LoadingIndicator,
  title: 'LoadingIndicator',
} as Meta;

export const LoadingIndicatorNotFull: Story = () => <LoadingIndicator />;
export const LoadingIndicatorFullScreen: Story = () => (
  <LoadingIndicator fullScreen />
);

export const Custom: Story<Props> = (args: Props) => (
  <LoadingIndicator {...args} />
);
Custom.argTypes = {
  fullScreen: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
};
