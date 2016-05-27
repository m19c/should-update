import shouldUpdate from '../';

describe('shouldUpdate', () => {
  it('returns false if no changes were made', () => {
    shouldUpdate(
      ['id', 'user.name'],
      { id: 1, user: { name: 'Jon Doe' } },
      { id: 1, user: { name: 'Jon Doe' } }
    ).should.be.not.ok();
  });

  it('returns true changes were made', () => {
    shouldUpdate(
      ['id', 'user.name'],
      { id: 1, user: { name: 'Jon Doe' } },
      { id: 1, user: { name: 'Lara Doe' } }
    ).should.be.ok();
  });

  it('throws an error if the first argument is not an array', () => {
    (() => shouldUpdate(undefined)).should.throw();
  });
});
