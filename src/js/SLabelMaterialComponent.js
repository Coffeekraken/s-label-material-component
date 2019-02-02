import native from 'coffeekraken-sugar/js/core/sNativeWebComponent'
import 'coffeekraken-sugar/js/features/inputAdditionalAttributes'

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
export default class SLabelMaterialComponent extends native(window.HTMLLabelElement) {
}
