import { useState } from 'react';
import { Input } from '@/components/Input';
import { integerToRomanConverter } from '@/utils/integerToRomanConverter';
import css from './IntegerToRomanForm.module.css';

export const IntegerToRomanForm: React.FunctionComponent = () => {
  // we are using string numerals in order to allow an empty input
  const [integer, setInteger] = useState<string>('1');
  const [roman, setRoman] = useState<string>(() =>
    integerToRomanConverter(Number(integer))
  );
  const [error, setError] = useState<string>();

  const handleChange = (value: string): void => {
    setInteger(value);

    try {
      const romanNum = integerToRomanConverter(Number(value));
      setRoman(romanNum);
      setError('');
    } catch (err: any) {
      setError(err.message);
      setRoman('-');
    }
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.form}>
      <fieldset>
        <legend>Number to Roman Numerals</legend>
        <Input
          type="number"
          min={1}
          max={1000}
          label="Number"
          id="integer"
          name="integer"
          onChange={handleChange}
          error={error}
          placeholder="number"
          value={integer}
          dataTestId="integer"
        />
        <p className={css.output}>{error ? '-' : `${integer} = ${roman}`}</p>
      </fieldset>
    </form>
  );
};
