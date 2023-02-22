import React from 'react';
import SiteFooter from './SiteFooter';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: SiteFooter,
} as ComponentMeta<typeof SiteFooter>;

export const Default: ComponentStory<typeof SiteFooter> = () => <SiteFooter />;
