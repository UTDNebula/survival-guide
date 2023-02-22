import React from 'react';
import ContentArea from './ContentArea';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: ContentArea,
} as ComponentMeta<typeof ContentArea>;

const Template: ComponentStory<typeof ContentArea> = (args) => <ContentArea {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...Template.args,
  sections:
    [] /* Sections argument might be able to be modified to view what the content area looks like with different headers, content lengths, etc. */,
};
