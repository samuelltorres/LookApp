module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: 'off',
    'comma-dangle': 'off',
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false
      }
    ]
  }
}
