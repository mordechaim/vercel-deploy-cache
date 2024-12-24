import { getNumber } from './action';
import { Client } from './client';

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const number = await getNumber();

  return (
    <div>
      <p>
        <b>Number: </b>
        {number}
      </p>
      <Client number={number} />
    </div>
  );
}
