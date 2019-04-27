const {expect, it, describe} = require('./expect');
const main = require('../index');

describe('the main function', () => {
  it('should get files', () => {
    const fileNames = main('./test/forTheTest');
    expect(JSON.stringify(fileNames)).to.equal('["invitation.png","poison_oak.jpg","then_why_worry.png"]');
  });

  it('should exclude files with extensions not in `fileExtensions`', () => {
    const fileNames = main('./test/forTheTest', ['png']);
    expect(JSON.stringify(fileNames)).to.equal('["invitation.png","then_why_worry.png"]');
  });

  it('should return an empty array when there are no files', () => {
    expect(JSON.stringify(main('./test/forTheTest/nothingInHere'))).to.equal('[]');
  });

  it('should fail properly', () => {
    try {
      main('nonsense');
    } catch (e) {
      expect(e.message).to.equal('Directory "nonsense" does not exist');
    }
  });
});
