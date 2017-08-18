import React, { PropTypes } from "react"
import ReactDOM from "react-dom"
import classNames from "classnames"
import Button from "rc-button"
import "./styles.less"

export default class Madal extends React.PureComponent {
    static defaultProps = {
        title: "title",
        okText: "Ok",
        cancelText: "cancel",
        onOk: () => { },
        onCancel: () => { },
        footer: [],
        visible: false
    }
    static PropTypes = {
        title: PropTypes.string,
        okText: PropTypes.string,
        cancelText: PropTypes.string,
        visible: PropTypes.bool.isRequired,
        footer: PropTypes.bool.isRequired,
        onCancel: PropTypes.func.isRequired,
        onOk: PropTypes.func.isRequired,
    }
    render() {
        const {
            children,
            title,
            footer,
            okText,
            cancelText,
            visible,
            onCancel,
            onOk,
            className,
            ...attr
        } = this.props
        return (
            <div key="jinke-modal-mask" className={classNames("jinke-modal-mask", className, { "modal-animate": visible })} {...attr}>
                <div key="modal" className="jinke-modal">
                    <section key="modal-header" className="modal-header">
                        <h2 className="title">{title}</h2>
                        <span className="modal-close-btn" onClick={() => onCancel()}>
                            <i className="icon icon-guanbi1"></i>
                        </span>
                    </section>
                    <section key="modal-content" className="modal-content">
                        {children}
                    </section>
                    {
                        footer && footer.length >= 1
                            ? <section key="modal-footer" className="modal-footer">
                                {
                                    footer.map((btns) => btns)
                                }
                            </section>

                            : footer instanceof Array
                                ? <section key="modal-footer" className="modal-footer">
                                    <Button onClick={() => onCancel()}>{cancelText}</Button>,
                                    <Button type="primary" onClick={() => onOk()}>{okText}</Button>
                                </section>
                                : undefined
                    }
                </div>
            </div>
        )
    }
}