import { useState, useCallback } from 'react';
import { IMCModel } from '../model/IMCModel';

export function useIMCViewModel() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [error, setError]   = useState('');

  const handleCalculate = useCallback(
    (navigation) => {
      const validationError = IMCModel.validate(weight, height);
      if (validationError) {
        setError(validationError);
        return;
      }
      setError('');
      const imc          = IMCModel.calculate(parseFloat(weight), parseFloat(height));
      const classification = IMCModel.classify(imc);
      navigation.navigate('Result', {
        imc,
        classification,
        weight: parseFloat(weight),
        height: parseFloat(height),
      });
    },
    [weight, height]
  );

  const reset = useCallback(() => {
    setWeight('');
    setHeight('');
    setError('');
  }, []);

  return { weight, setWeight, height, setHeight, error, handleCalculate, reset };
}