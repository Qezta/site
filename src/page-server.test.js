import { describe, expect, it } from 'vitest';

import { prerender } from './routes/+page.server.js';

describe('site homepage server config', () => {
  it('prerenders the homepage for static output', () => {
    expect(prerender).toBe(true);
  });
});
