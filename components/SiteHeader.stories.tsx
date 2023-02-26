import React from 'react';
import SiteHeader from './SiteHeader';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: SiteHeader,
} as ComponentMeta<typeof SiteHeader>;

export const Default: ComponentStory<typeof SiteHeader> = () => <SiteHeader />;
