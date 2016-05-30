import { shouldUpdate, createShouldUpdate } from '../';

class MockedComponent {
  constructor(props) {
    this.props = props;
  }
}

describe('should-update', () => {
  describe('createShouldUpdate()', () => {
    it('creates a simple shouldComponentUpdate function', () => {
      const mock = new MockedComponent({
        id: 1,
        title: 'Test',
        user: { id: 1 }
      });
      mock.shouldComponentUpdate = createShouldUpdate('user.id');

      mock.shouldComponentUpdate({ id: 2, user: { id: 2 } }).should.be.ok();
    });
  });

  describe('shouldUpdate()', () => {
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

    it('works with deep keys', () => {
      shouldUpdate(
        ['user.group.first.member.leader.email'],
        {
          user: {
            group: {
              first: {
                member: {
                  leader: {
                    email: 'jon@doe.com'
                  }
                }
              }
            }
          }
        },
        {
          user: {
            group: {
              first: {
                member: {
                  leader: {
                    email: 'lara@doe.com'
                  }
                }
              }
            }
          }
        }
      ).should.be.ok();
    });

    it('throws an error if the first argument is not an array', () => {
      (() => shouldUpdate(undefined)).should.throw();
    });
  });
});
