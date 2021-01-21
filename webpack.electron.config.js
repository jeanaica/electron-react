module.exports = {
  mode: 'production',
  entry: './src/electron.ts',
  target: 'electron-main',
  module: {
    rules: [
  {
    test: /\.ts$/,
    include: /src/,
    use: [{ loader: 'ts-loader' }],
  },
    ],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'electron.js',
  },
};
