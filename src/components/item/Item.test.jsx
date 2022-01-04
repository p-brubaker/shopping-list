import Item from '../item/Item';
import { render, screen } from '@testing-library/react';

it('should render the addItem component', async () => {
  const fakeItem = { name: 'barley', id: 0 };

  const { container } = render(<Item item={fakeItem} />);

  screen.getByText('Edit');
  screen.getByText('Delete');
  expect(container).toMatchSnapshot();
});
