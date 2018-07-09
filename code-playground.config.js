module.exports = {
	// server port
	port : 3000,

	// title
	title : 's-label-material-component',

	// layout
	layout : 'right',

	// compile server
	compileServer : {

		// compile server port
		port : 4000

	},

	// editors
	editors : {
		html : {
			language : 'html',
			data : `
				<h1 class="h3 m-b-small">
					Coffeekraken s-label-material-component
				</h1>
				<p class="p m-b-bigger">
					Provide a simple material design style label/input.
				</p>

				<label is="s-label-material" class="m-b" color="primary">
					<input type="text" name="firstname" />
					<span>Firstname</span>
				</label>

				<label is="s-label-material" class="m-b" color="secondary">
					<input type="text" name="lastname" value="Doe" />
					<span>Lastname</span>
				</label>

				<label is="s-label-material" class="m-b" color="success">
					<input type="email" name="email" />
					<span>Email</span>
				</label>

				<label is="s-label-material" class="m-b" color="error">
					<input type="text" name="phone" />
					<span>Phone number</span>
				</label>

				<label is="s-label-material" class="m-b" color="warning">
					<input type="text" name="address" />
					<span>Address</span>
				</label>

				<label is="s-label-material" class="m-b">
					<input type="text" name="subject" />
					<span>Subject</span>
				</label>

				<label is="s-label-material" color="info" class="m-b">
					<textarea name="message"></textarea>
					<span>Message</span>
				</label>

			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@import 'node_modules/coffeekraken-s-typography-component/index';
				@import 'index';

				@include s-init();
				@include s-classes();
				@include s-typography-classes();
				body {
					padding: s-space(big);
				}
				@include s-label-material-classes(
					$colors: default primary secondary success error warning info
				)
			`
		},
		js : {
			language : 'js',
			data : `
				import 'webcomponents.js/webcomponents-lite'
				import SLabelMaterialComponent from './dist/index'
			`
		}
	}
}
