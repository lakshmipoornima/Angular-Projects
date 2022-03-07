import { Cartlist } from './cartlist';

describe('Cartlist', () => {
  it('should create an instance', () => {
    expect(new Cartlist("","",0,"",0)).toBeTruthy();
  });
});
