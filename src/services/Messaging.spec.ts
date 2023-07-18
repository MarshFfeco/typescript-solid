import { Messaging } from './Messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut();
    expect(sut.SendMessage('teste')).toBeUndefined();
  });

  it('should call console.log with "Message Sent\n ${msg}', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    const msg = "teste"
    sut.SendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith(`Message Sent\n ${msg}`);
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.SendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
