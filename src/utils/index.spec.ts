import { createLocationSearch } from './index';
describe('utils/index.ts', () => {
  describe('createLocationSearch', () => {
    it('当传入对象时，序列化成字符串', () => {
      expect(typeof createLocationSearch({ a: 1 })).toBe('string');
    });
  });
});
