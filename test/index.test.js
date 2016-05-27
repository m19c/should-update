import shouldUpdate from '../';

describe('shouldUpdate', () => {
  it('no changes', () => {
    shouldUpdate(
      ['id', 'user.name'],
      { id: 1, user: { name: 'Jon Doe' } },
      { id: 1, user: { name: 'Jon Doe' } }
    ).should.be.not.ok();
  });

  it('changes', () => {
    shouldUpdate(
      ['id', 'user.name'],
      { id: 1, user: { name: 'Jon Doe' } },
      { id: 1, user: { name: 'Lara Doe' } }
    ).should.be.ok();
  });
});
