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

      expect(mock.shouldComponentUpdate({ id: 2, user: { id: 2 } })).toBe(true);
    });
  });

  describe('shouldUpdate()', () => {
    it('returns false if no changes were made', () => {
      expect(shouldUpdate(
        ['id', 'user.name'],
        { id: 1, user: { name: 'Jon Doe' } },
        { id: 1, user: { name: 'Jon Doe' } }
      )).toBe(false);
    });

    it('returns true changes were made', () => {
      expect(shouldUpdate(
        ['id', 'user.name'],
        { id: 1, user: { name: 'Jon Doe' } },
        { id: 1, user: { name: 'Lara Doe' } }
      )).toBe(true);
    });

    it('works with deep keys', () => {
      expect(shouldUpdate(
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
      )).toBe(true);
    });

    it('throws an error if the first argument is not an array', () => {
      expect(() => shouldUpdate(undefined)).toThrow();
    });
  });
});
