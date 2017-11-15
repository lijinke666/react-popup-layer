import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import CloseIcon from "react-icons/lib/fa/close"

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
        visible: PropTypes.bool,
        footer: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.bool
        ]),
        onCancel: PropTypes.func,
        onOk: PropTypes.func,
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
            <div 
                key="jinke-modal-mask" 
                className={
                    classNames(
                        "jinke-modal-mask", 
                        className, 
                        { "modal-animate": visible }
                    )
                } 
                {...attr}
            >
                <div key="modal" className="jinke-modal">
                    <div key="modal-header" className="modal-header">
                        <h2 className="title">{title}</h2>
                        <span className="modal-close-btn" onClick={() => onCancel()}>
                            <CloseIcon/>
                        </span>
                        
                    </div>
                    <div key="modal-content" className="modal-content">
                        {children}
                    </div>
                    {
                        footer && footer.length >= 1
                            ? <div key="modal-footer" className="modal-footer">
                                {
                                    footer.map((btns) => btns)
                                }
                            </div>

                            : footer instanceof Array
                                ? <div key="modal-footer" className="modal-footer">
                                    <button className="btn btn-default" onClick={() => onCancel()}>{cancelText}</button>
                                    <button className="btn btn-primary" onClick={() => onOk()}>{okText}</button>
                                </div>
                                : undefined
                    }
                </div>
            </div>
        )
    }
}