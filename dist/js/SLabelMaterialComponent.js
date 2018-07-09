'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SWebComponent2 = require('coffeekraken-sugar/js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

require('coffeekraken-sugar/js/features/inputAdditionalAttributes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Provide a simple material design style label/input.
 *
 * @example 	html
 * <label is="s-label-material">
 * 	<input type="text" name="firstname" />
 * 	<span>Firstname</span>
 * </label>
 *
 * @author		Olivier Bossel <olivier.bossel@gmail.com>
 */
var SLabelMaterialComponent = function (_SWebComponent) {
  _inherits(SLabelMaterialComponent, _SWebComponent);

  function SLabelMaterialComponent() {
    _classCallCheck(this, SLabelMaterialComponent);

    return _possibleConstructorReturn(this, (SLabelMaterialComponent.__proto__ || Object.getPrototypeOf(SLabelMaterialComponent)).apply(this, arguments));
  }

  return SLabelMaterialComponent;
}(_SWebComponent3.default);

exports.default = SLabelMaterialComponent;