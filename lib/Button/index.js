import _Object$getPrototypeOf from "babel-runtime/core-js/object/get-prototype-of";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";

var _class, _temp;

import React, { PropTypes } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import "./styles.less";

var Button = (_temp = _class = function (_React$PureComponent) {
    _inherits(Button, _React$PureComponent);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || _Object$getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                children = _props.children,
                type = _props.type,
                className = _props.className,
                htmlType = _props.htmlType,
                onClick = _props.onClick;

            var Type = function Type(btnType) {
                return type.indexOf(btnType) != -1;
            };
            return React.createElement(
                "button",
                {
                    type: htmlType,
                    onClick: onClick,
                    className: classNames('jinke-btn', 'btn', { 'btn-primary': Type("primary") }, { 'btn-warning': Type("warning") }, { 'btn-success': Type("success") }, { 'btn-error': Type("error") }, { 'btn-default': Type("default") }, { 'btn-disbled': Type("disbled") }, { 'btn-info': Type("info") }, { 'btn-block': Type("block") }, className)
                },
                React.createElement(
                    "span",
                    null,
                    children
                )
            );
        }
    }]);

    return Button;
}(React.PureComponent), _class.defaultProps = {
    type: "default",
    htmlType: "button"
}, _class.PropTypes = {
    type: PropTypes.oneOf(['primary', 'default', 'warning', 'success', 'error', 'info', 'disbled'])
}, _temp);
export { Button as default };
module.exports = exports["default"];