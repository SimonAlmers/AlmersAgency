import { useState } from 'react';

const useBoolState = (
  initialValue: boolean,
): [boolean, () => void, (value: boolean) => void] => {
  const [state, setState] = useState(initialValue);

  const toggleState = () => setState(prev => !prev);

  return [state, toggleState, setState];
};

export default useBoolState;
