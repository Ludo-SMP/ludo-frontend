module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    // 중첩된 삼항연삼자 사용 금지
    'no-nested-ternary': 0,
    // 반복문으로 생성하는 요소에 key 강제
    'react/jsx-key': 'off',
    // 디버그 허용
    'no-debugger': 'off',
  },
};
