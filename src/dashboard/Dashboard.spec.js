// Test away
import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test('Dashboard renders correctly', () => {
  render(<Dashboard />);
});

// test('Gate should initially be unlocked', () => {
//     expect(Dashboard.state.locked).toEqual(false)
//   });