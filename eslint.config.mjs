import config from '@rocketseat/eslint-config/node.mjs'

const baseConfig = config

const override = {
  rules: {
    '@stylistic/max-len': [
      'error',
      {
        code: 150,
        ignoreComments: true,
        ignoreUrls: true,
        ignorePattern: '^import\\s.+$',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: 'createAccountBodySchema',
      },
    ],
  },
}

const finalConfig = Array.isArray(baseConfig)
  ? [...baseConfig, override]
  : [baseConfig, override]

export default finalConfig
