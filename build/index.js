Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldUpdate = shouldUpdate;
exports.createShouldUpdate = createShouldUpdate;

var _deepProperty = require('deep-property');

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
function shouldUpdate(alterable, props, nextProps) {
  for (var index = 0; index < alterable.length; index++) {
    if ((0, _deepProperty.get)(nextProps, alterable[index]) !== (0, _deepProperty.get)(props, alterable[index])) {
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
/**
 * @author Marc Binder <marcandrebinder@gmail.com> (MrBoolean)
 * @copyright 2016 MIT
 */

function createShouldUpdate() {
  for (var _len = arguments.length, alterable = Array(_len), _key = 0; _key < _len; _key++) {
    alterable[_key] = arguments[_key];
  }

  return function () {
    function shouldComponentUpdate(nextProps) {
      return shouldUpdate(alterable, this.props, nextProps);
    }

    return shouldComponentUpdate;
  }();
}