import _Object$getPrototypeOf from "babel-runtime/core-js/object/get-prototype-of";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";

var _class, _temp;

import React, { PropTypes } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import Button from "../Button";
import "./styles.less";

var Madal = (_temp = _class = function (_React$PureComponent) {
    _inherits(Madal, _React$PureComponent);

    function Madal() {
        _classCallCheck(this, Madal);

        return _possibleConstructorReturn(this, (Madal.__proto__ || _Object$getPrototypeOf(Madal)).apply(this, arguments));
    }

    _createClass(Madal, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                children = _props.children,
                title = _props.title,
                footer = _props.footer,
                footerTitle = _props.footerTitle,
                visible = _props.visible,
                onCancel = _props.onCancel,
                className = _props.className;

            return React.createElement(
                "div",
                { key: "jinke-modal-mask", className: classNames("jinke-modal-mask", className, { "modal-animate": visible }) },
                React.createElement(
                    "div",
                    { key: "modal", className: "jinke-modal" },
                    React.createElement(
                        "section",
                        { key: "modal-header", className: "modal-header" },
                        React.createElement(
                            "h2",
                            { className: "title" },
                            title
                        ),
                        React.createElement(
                            "span",
                            { className: "modal-close-btn", onClick: function onClick() {
                                    return onCancel();
                                } },
                            React.createElement("i", { className: "icon icon-guanbi1" })
                        )
                    ),
                    React.createElement(
                        "section",
                        { key: "modal-content", className: "modal-content" },
                        children
                    ),
                    footer ? React.createElement(
                        "section",
                        { key: "modal-footer", className: "modal-footer", onClick: onCancel },
                        React.createElement(
                            Button,
                            { type: "primary block" },
                            footerTitle
                        )
                    ) : undefined
                )
            );
        }
    }]);

    return Madal;
}(React.PureComponent), _class.defaultProps = {
    title: "标题",
    footerTitle: "关闭",
    footer: true,
    visible: false
}, _class.PropTypes = {
    title: PropTypes.string,
    footerTitle: PropTypes.string,
    visible: PropTypes.bool.isRequired,
    footer: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired
}, _temp);
export { Madal as default };
module.exports = exports["default"];