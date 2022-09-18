import { render, screen } from '@testing-library/react';
import { Layout } from '.';

describe('<Layout />', () => {
  it('renders header', () => {
    render(
      <Layout>
        <div>Children</div>
      </Layout>
    );
    expect(screen.getByText('Roman Numerals')).toBeInTheDocument();
  });

  it('renders footer', () => {
    render(
      <Layout>
        <div>Children</div>
      </Layout>
    );
    expect(screen.getByText('Created by unikvozm')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Layout>
        <div>Children</div>
      </Layout>
    );
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
