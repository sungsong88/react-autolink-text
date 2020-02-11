[![npm version](https://badge.fury.io/js/react-autolink-text2.svg)](https://badge.fury.io/js/react-autolink-text2)
[![CircleCI](https://circleci.com/gh/schneidmaster/react-autolink-text.svg?style=shield)](https://circleci.com/gh/schneidmaster/react-autolink-text)
[![Coverage Status](https://coveralls.io/repos/github/schneidmaster/react-autolink-text/badge.svg?branch=master)](https://coveralls.io/github/schneidmaster/react-autolink-text?branch=master)

# \<AutoLinkText /\>

A React component for converting URLs in a given string of text into clicking link tags.

The original package was published at [OpenGov/react-autolink-text](https://github.com/OpenGov/react-autolink-text), but it seems to have been abandoned so I've published a fork to support ongoing development and keep up with new React versions.

## Installation

    npm install react-autolink-text2

## Usage

```js
import ReactDOM from 'react-dom';
import AutoLinkText from 'react-autolink-text2';

ReactDOM.render(
  <AutoLinkText text='Check out this cool component: http://github.com/schneidmaster/react-autolink-text2' />,
  document.body
);
```

### Props
* `text` (string) -- text to be autolinked
* `[disableUrlStripping]` (boolean) -- optional bypass of anchor text stripping
* `[maxLength]` (number) -- optional max text length, after which the provided text will be truncated
* `[linkProps]` (object) -- optional props to be set on generated link elements (`target='_blank'`, `rel='nofollow'`, custom classes, etc.)

## Development

### Prerequisites

* git
* npm
* yarn (optional/recommended)

### Setup

1. Clone the repository (`git clone git@github.com:schneidmaster/react-autolink-text.git`)
2. Install dependencies: `npm install` or `yarn install`

### Testing

Run `npm run examples` or `yarn examples` and open [http://localhost:8080](http://localhost:8080). Make changes in `src/index.js` or try different use cases in `examples/app.js`.

Run `npm test` or `yarn test` to execute the jest test suite. An HTML code coverage report is automatically saved to `/coverage/lcov-report/index.html`.

Run `npm run lint` or `yarn lint` to lint the codebase (using eslint).

### Deployment

Run `npm run build` or `yarn build` to build an ES5 version of the package.

## Contributing

1. Fork it (https://github.com/schneidmaster/react-autolink-text/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Thanks
Thank you to @gregjacobs for creating [Autolinker.js](https://github.com/gregjacobs/Autolinker.js) from which this component was based.
