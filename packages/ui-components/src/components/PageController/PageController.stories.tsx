import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PageController from './PageController';

const meta: Meta<typeof PageController> = {
  title: 'Componentes/PageController',
  component: PageController,
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    onPageChange: { action: 'pageChanged' },
  },
};

export default meta;

type Story = StoryObj<typeof PageController>;

export const Default: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage ?? 0);

    return (
      <PageController
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    );
  },
  args: {
    currentPage: 2,
    totalPages: 10,
  },
};

export const ThreePages: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage ?? 0);

    return (
      <PageController
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    );
  },
  args: {
    currentPage: 0,
    totalPages: 3,
  },
};
