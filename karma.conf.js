module.exports = function(config) {
  config.set({
    browsers: [process.env.CI ? 'Firefox' : 'Chrome'],
    singleRun: process.env.CI === 'true',

    frameworks: ['jasmine'],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    reporters: ['dots'],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
          }
        ]
      }
    },

    webpackServer: {
      noInfo: true
    }
  });
};
