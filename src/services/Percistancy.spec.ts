import { Percistancy } from './Percistancy';

const createSut = () => {
  return new Percistancy();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut();
    expect(sut.SaveOrder()).toBeUndefined();
  });

  it('should call console.log with "Your Order was Saved"', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.SaveOrder();
    expect(consoleSpy).toHaveBeenCalledWith(`Your Order was Saved`);
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.SaveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
