import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import HomePage from './page';

describe('HomePage', () => {
  it('mostra o título da loja', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', { name: 'Loja da ótica' })
    ).toBeInTheDocument();
  });
});
