'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MultiTypeahead from '../multi-typeahead';

if (typeof window !== 'undefined') {
    window.React = React;
}

ReactDOM.render(
    <MultiTypeahead />,
    document.getElementById('app')
);