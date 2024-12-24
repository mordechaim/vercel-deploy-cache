'use server';

import {
  unstable_cacheTag as cacheTag,
  unstable_expireTag as expireTag,
} from 'next/cache';

let number = 0;

export async function getNumber() {
  'use cache';
  cacheTag('number');

  return number;
}

export async function setNumber(num: number) {
  number = num;
  expireTag('number');
}
