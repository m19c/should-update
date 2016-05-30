/**
 * @author Marc Binder <marcandrebinder@gmail.com> (MrBoolean)
 * @copyright 2016 MIT
 */

import { get } from 'deep-property';

/**
 * @example
 * shouldUpdate(
 *   ['user.id', 'user.firstname', 'user.lastname', 'user.avatar.id'],
 *   { user: { id: 2 } },
 *   { user: { id: 1 } }
 * );
 *
 * @param  {array} alterable
 * @param  {object} props
 * @param  {object} nextProps
 *
 * @return {boolean}
 */
export function shouldUpdate(alterable, props, nextProps) {
  for (let index = 0; index < alterable.length; index++) {
    if (get(nextProps, alterable[index]) !== get(props, alterable[index])) {
      return true;
    }
  }

  return false;
}

/**
 * @example
 * class MyComponent extends Component {
 *   shouldUpdate: createShouldUpdate('id', 'user.id', 'user.firstname')
 * }
 *
 * @return {function}
 */
export function createShouldUpdate(...alterable) {
  return function shouldComponentUpdate(nextProps) {
    return shouldUpdate(alterable, this.props, nextProps);
  };
}
