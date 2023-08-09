module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@db': './src/db',
          '@api': './src/api',
          '@config': './src/config',
          '@utils': './src/utils',
        },
      },
    ],
    [
      '@babel/plugin-syntax-decorators',
      {
        legacy: true,
      },
    ],
  ],
}
