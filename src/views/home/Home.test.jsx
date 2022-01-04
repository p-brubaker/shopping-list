import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';

beforeEach(() => {
  render(<Home />);
});

it('should add an item to the list', async () => {
  const addItemInput = screen.getByLabelText('Item Name');
  const addButton = screen.getByRole('button', { name: 'Add' });
  userEvent.type(addItemInput, 'bananas');
  userEvent.click(addButton);

  screen.findByText('bananas');
});

it('should delete an item', async () => {
  const parsley = screen.getByText('Parsley');
  const deleteButton = screen.getAllByRole('button')[0];

  userEvent.click(deleteButton);
  expect(parsley).not.toBeInTheDocument;
});

it('should edit an existing item', async () => {
  const editButton = screen.getAllByRole('button')[1];
  userEvent.click(editButton);

  const input = screen.findAllByRole('textbox')[1];
  const saveButton = screen.getAllByRole('button')[1];

  userEvent.type(input, 's');
  userEvent.click(saveButton);

  screen.findByText('Parsleys');
});

it('should render the shopping list', async () => {
  screen.getByText('Parsley');
  screen.getByText('Sage');
  screen.getByText('Rosemary');
  screen.getByText('Thyme');
});
