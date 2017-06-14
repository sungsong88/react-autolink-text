\<AutoLinkText /\>
================

[![CircleCI](https://circleci.com/gh/schneidmaster/react-autolink-text.svg?style=shield)](https://circleci.com/gh/schneidmaster/react-autolink-text)

A React component for converting URLs in a given string of text into clicking link tags.

The original package was published at [OpenGov/react-autolink-text](https://github.com/OpenGov/react-autolink-text), but it seems to have been abandoned so I've published a fork to support ongoing development and keep up with new React versions.

Installation
------------
`npm install react-autolink-text2`

Usage
-----
```js
import ReactDOM from 'react-dom';
import AutoLinkText from 'react-autolink-text2';

ReactDOM.render(
  <AutoLinkText text="Check out this cool component: http://github.com/schneidmaster/react-autolink-text2" />,
  document.body
);
```

Thanks
------
Thank you to @gregjacobs for creating [Autolinker.js](https://github.com/gregjacobs/Autolinker.js) from which this component was based.
