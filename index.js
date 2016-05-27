/**
 * @author Marc Binder <marcandrebinder@gmail.com> (MrBoolean)
 * @copyright 2016 MIT
 */

import { get } from 'deep-property';

/**
 * Compares the `alterable` keys of `currentProps` agains `upcomingProps`. The
 * function returns `true` if something has changed, otherwise `false`.
 *
 * @example
 * shouldUpdate(
 *   ['user.id', 'user.firstname', 'user.lastname', 'user.avatar.id'],
 *   { user: { id: 2 } },
 *   { user: { id: 1 } }
 * );
 *
 * @param  {array} alterable
 * @param  {object} currentProps
 * @param  {object} upcomingProps
 *
 * @return {boolean}
 */
export default function shouldUpdate(alterable, currentProps, upcomingProps) {
  for (let index = 0; index < alterable.length; index++) {
    if (get(upcomingProps, alterable[index]) !== get(currentProps, alterable[index])) {
      return true;
    }
  }

  return false;
}
