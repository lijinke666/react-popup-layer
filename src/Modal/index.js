import React, { PropTypes } from "react"
import ReactDOM from "react-dom"
import classNames from "classnames"
import Button from "../Button"
import "./styles.less"

export default class Madal extends React.PureComponent {
    static defaultProps = {
        title: "标题",
        footerTitle:"关闭",
        footer:true,
        visible:false
    }
    static PropTypes = {
        title:PropTypes.string,
        footerTitle:PropTypes.string,
        visible:PropTypes.bool.isRequired,
        footer:PropTypes.bool.isRequired,
        onCancel: PropTypes.func.isRequired
    }
    render() {
        const { children, title,footer,footerTitle, visible, onCancel, className } = this.props
        return (
            <div key="jinke-modal-mask" className={classNames("jinke-modal-mask", className, { "modal-animate": visible })}>
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
                        footer
                           ? <section key="modal-footer" className="modal-footer" onClick={onCancel}>
                                 <Button type="primary block">{footerTitle}</Button>
                             </section>
                            : undefined
                    }
                </div>
            </div>
        )
    }
}