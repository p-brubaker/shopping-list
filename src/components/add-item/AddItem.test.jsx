import AddItem from '../add-item/AddItem';
import { render, screen } from '@testing-library/react';

it('should render the addItem component', async () => {
  const { container } = render(<AddItem />);

  screen.getByLabelText('Item Name');
  expect(container).toMatchSnapshot();
});
