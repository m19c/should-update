import { get } from 'deep-property';

/**
 * ...
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
 * @return {boolean}
 */
export default function shouldUpdate(alterable, currentProps, upcomingProps) {
  let index;

  for (index = 0; index < alterable.length; index++) {
    if (get(upcomingProps, alterable[index]) !== get(currentProps, alterable[index])) {
      return true;
    }
  }

  return false;
}
