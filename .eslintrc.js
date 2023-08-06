module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		'react-native/react-native': true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'react-native/no-unused-styles': 2,
		'react-native/split-platform-components': 2,
		'react-native/no-raw-text': 2,
		'react-native/sort-styles': [
			'error',
			'asc',
			{
				ignoreClassNames: false,
				ignoreStyleProperties: false,
			},
		],
		'no-unused-vars': 'warn',
		'react/no-unescaped-entities': 'off',
		'react/prop-types': 'off',
	},
	plugins: ['react', 'react-native'],
};
