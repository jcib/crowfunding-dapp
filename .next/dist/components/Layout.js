'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jcarlos/Escritorio/Solidity/kickstart/components/Layout.js';
// Aquí pondremos headers, footers que se reutilizarán en diversos componentes.
// Campaign List será child de Layout

// mueve al header

exports.default = function (props) {
    return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    })), _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }), props.children));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZCIsIkhlYWRlciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU8sQTs7OztBQUNQLEFBQU8sQUFBWSxBQUVuQjs7Ozs7OztBQVJBO0FBQ0E7O0FBSThCOztrQkFHZixpQkFBUyxBQUNwQjsyQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBO2FBQ0ksQUFDUSxBQUNKO2NBRkosQUFFUzs7c0JBRlQ7d0JBRlIsQUFDSSxBQUNJLEFBTUo7QUFOSTtBQUNJLHlCQUtSLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUM7O3NCQUFEO3dCQURKLEFBQ0ksQUFDQztBQUREO0FBQUEsY0FWWixBQUNJLEFBUUksQUFFVyxBQU90QjtBQW5CRCIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamNhcmxvcy9Fc2NyaXRvcmlvL1NvbGlkaXR5L2tpY2tzdGFydCJ9