import React, { PropTypes } from "react"
import ReactDOM from "react-dom"
import classNames from "classnames"
import "./styles.less"

export default class Button extends React.PureComponent {
    static defaultProps = {
        type: "default",
        htmlType: "button"
    }
    static PropTypes = {
        type: PropTypes.oneOf(['primary', 'default', 'warning', 'success', 'error','info','disbled'])
    }
    render() {
        const { children, type, className, htmlType,onClick } = this.props
        const Type = ( btnType )=>{
            return type.indexOf(btnType) != -1
        }
        return (
            <button
                type={htmlType}
                onClick={onClick}
                className={
                    classNames(
                        'jinke-btn',
                        'btn',
                        { 'btn-primary': Type("primary") },
                        { 'btn-warning': Type("warning") },
                        { 'btn-success': Type("success") },
                        { 'btn-error': Type("error") },
                        { 'btn-default': Type("default") },
                        { 'btn-disbled': Type("disbled") },
                        { 'btn-info': Type("info") },
                        { 'btn-block': Type("block")},
                        className,
                    )
                }
            >
                <span>{children}</span>
            </button>
        )
    }
}