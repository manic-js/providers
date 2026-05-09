import { describe, expect, it } from 'bun:test';
import * as providers from '../src/index';

describe('@manicjs/providers exports', () => {
  it('exposes provider factories', () => {
    expect(typeof providers.vercel).toBe('function');
    expect(typeof providers.cloudflare).toBe('function');
    expect(typeof providers.netlify).toBe('function');
  });
});
