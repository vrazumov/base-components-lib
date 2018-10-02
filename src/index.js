import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Base App React Webpack Babel Template';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();