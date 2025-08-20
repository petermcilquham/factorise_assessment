import { render, screen } from '@testing-library/react-native';

import Index from '@/app/index';

test('Text renders correctly on Index screen', () => {
  render(<Index />);

  screen.getByText('Task Form');
});
