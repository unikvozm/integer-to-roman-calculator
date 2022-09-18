import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '.';

describe('<Input/>', () => {
  it('should render Input component', () => {
    render(
      <Input
        type="number"
        name="input"
        label="label"
        value="1"
        id="input"
        dataTestId="input"
      />
    );
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    expect(screen.getByLabelText('label')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toHaveClass('input');
    expect(screen.getByTestId('input_label')).toHaveClass('inputLabel');
  });

  it('should render Input component with custom classNames', () => {
    render(
      <Input
        type="number"
        name="input"
        label="label"
        value="1"
        id="input"
        dataTestId="input"
        className="inputClassName"
        labelClassName="labelClassName"
      />
    );
    expect(screen.getByTestId('input')).toHaveClass('input');
    expect(screen.getByTestId('input')).toHaveClass('inputClassName');
    expect(screen.getByTestId('input_label')).toHaveClass('inputLabel');
    expect(screen.getByTestId('input_label')).toHaveClass('labelClassName');
  });

  it('should dislpay error', () => {
    render(
      <Input
        id="input"
        type="number"
        name="input"
        label="label"
        value="1"
        error="Error"
      />
    );
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Error')).toHaveClass('errorMessage');
  });

  it('should handle onChange', () => {
    const onChange = jest.fn();
    render(
      <Input
        onChange={onChange}
        type="number"
        id="input"
        name="input"
        label="label"
        value="1"
      />
    );
    fireEvent.change(screen.getByLabelText('label'), {
      target: { value: '2' },
    });
    expect(onChange).toHaveBeenCalled();
  });
});
