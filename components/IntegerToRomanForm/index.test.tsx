import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { IntegerToRomanForm } from '.';

describe('<IntegerToRomanForm/>', () => {
  it('should render IntegerToRomanForm component', () => {
    render(<IntegerToRomanForm />);
    expect(screen.getByText('Number to Roman Numerals')).toBeInTheDocument();
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    expect(screen.getByLabelText('Number')).toBeInTheDocument();
    expect(screen.getByTestId('integer')).toHaveClass('input');
    expect(screen.getByTestId('integer_label')).toHaveClass('inputLabel');
  });

  it('should dislpay errors', () => {
    render(<IntegerToRomanForm />);
    fireEvent.change(screen.getByLabelText('Number'), {
      target: { value: '-2' },
    });
    expect(
      screen.getByText(
        'The input can accept only numbers from 1 to 1000 inclusively.'
      )
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Number'), {
      target: { value: '2.5' },
    });
    expect(
      screen.getByText('The input has to be an integer')
    ).toBeInTheDocument();
  });
});
