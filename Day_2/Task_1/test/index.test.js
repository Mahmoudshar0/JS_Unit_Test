import { expect } from 'chai';

import { fetchData } from '../../index.js';

describe('fetchData', function() {
  it('test promises', async function() {
    const data = await fetchData;
    expect(data).to.be.an('array');
    expect(data.length).to.equal(100);
  });
});
