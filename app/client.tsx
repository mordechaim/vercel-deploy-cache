'use client';

import { ChangeEvent, useOptimistic, useTransition } from 'react';
import { setNumber } from './action';

export function Client({ number }: { number: number }) {
  const [optimistic, setOptimistic] = useOptimistic(number);
  const [pending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    if (isNaN(value)) {
      return;
    }

    startTransition(async () => {
      setOptimistic(value);
      await setNumber(value);
    });
  };

  return <input value={optimistic} type='number' onChange={handleChange} />;
}
