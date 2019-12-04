module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [ 'plugin:react/recommended', 'airbnb' ],
	globals: {
		window: true,
		document: true,
		localStorage: true,
		FormData: true,
		FileReader: true,
		Blob: true,
		navigator: true,
		Headers: true,
		Request: true,
		fetch: true
	},
	plugins: [ 'react' ],
	rules: {
		'linebreak-style': 0,
		'react/jsx-filename-extension': [
			1,
			{
				extensions: [ '.js', '.jsx' ]
			}
		],
		'react/prop-types': 0,
		'no-underscore-dangle': 0,
		'import/imports-first': [ 'error', 'absolute-first' ],
		'import/newline-after-import': 'error',
		'import/prefer-default-export': 0,
		semi: 'error',
		singleQuote: 0,
		'comma-dangle': 'off',
		indent: [ 'error', 'tab' ],
		'no-tabs': 0,
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'import/no-named-as-default': 0,
		"template-curly-spacing": 0,
		indent: 0
	},
	parser: 'babel-eslint'
};
