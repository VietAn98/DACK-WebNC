module.exports = {
	"extends": ["airbnb"],
	"plugins": ["prettier"],
	"rules": {
		"react/jsx-filename-extension": [
			1,
			{
				"extensions": [".js", ".jsx"]
			}
		],
		"react/prop-types": 0,
		"no-underscore-dangle": 0,
		"import/imports-first": ["error", "absolute-first"],
		"import/newline-after-import": "error",
		"import/prefer-default-export": 0,
		"semi": "error",
	},
	"globals": {
		"window": true,
		"document": true,
		"localStorage": true,
		"FormData": true,
		"FileReader": true,
		"Blob": true,
		"navigator": true,
		"Headers": true,
		"Request": true,
		"fetch": true
	},
	"parser": "babel-eslint"
};
