import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ParagraphWithIcon, { Props } from './ParagraphWithIcon';

export default {
  component: ParagraphWithIcon,
  title: 'ParagraphWithIcon',
} as Meta;

export const Example: Story = () => (
  <ParagraphWithIcon
    title="Make payment seamless"
    subTitle="Online or in-store, Quadpay means more flexibility at checkout."
    iconUrl="/assets/smartphone_pay_dollar.png"
  />
);

export const Custom: Story<Props> = (args: Props) => (
  <ParagraphWithIcon {...args} />
);

Custom.argTypes = {
  title: {
    defaultValue: 'What is Lorem Ipsum?',
  },
  subTitle: {
    defaultValue: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
  },
  iconUrl: {
    defaultValue: '/assets/analytics_graph.png',
  },
};
