import React from "react"
import ReactDOM from "react-dom"
import ReactPopupLayer from "../src"
import Message from "rc-message"
import "rc-message/assets/index.css"

import "../src/index.less"
const margin = {margin:"10px 0"}


class Demo extends React.PureComponent {
    state = {
        visible: false,
        visible2: false,
        visible3:false,
    }
    onOk = ()=>{
        Message.success({content:"OK!"})
        this.cancelModal()
    }
    openModal = () => {
        this.setState({ visible: true })
    }
    cancelModal = () => {
        this.setState({ visible: false })
    }
    openNoFooterModal = ()=>{
         this.setState({ visible2: true })
    }
    cancelNoFooterModal = ()=>{
        this.setState({ visible2: false })
    }
    openCustomFooterModal = ()=>{
         this.setState({ visible3: true })
    }
    cancelCustomFooterModal = ()=>{
        this.setState({ visible3: false })
    }
    customOk = ()=>{
        Message.success({content:"OK!"})
        this.cancelCustomFooterModal()
    }
    render() {
        const { visible,visible2,visible3 } = this.state
        return (
            <div>
                <h2>Example</h2>
                <hr/>

                <ol>
                    <li style={margin}><button className="btn btn-primary"  onClick={this.openModal}>open Modal</button></li>
                    <li style={margin}><button className="btn btn-success" onClick={this.openNoFooterModal}>open no footer Modal</button></li>
                    <li style={margin}><button className="btn btn-info" onClick={this.openCustomFooterModal}>open custom footer Modal</button></li>
                </ol>
         
                <hr />
                <ReactPopupLayer
                    title="example title"
                    okText="ok"
                    cancelText="cancel"
                    visible={visible}
                    onOk={this.onOk}
                    onCancel={this.cancelModal}
                    className="my-modal"
                >
                    <p>
                        <h1>bla bla bla ...</h1>
                    </p>
                </ReactPopupLayer>

                <ReactPopupLayer
                    title="wtf!! I have no footer"
                    visible={visible2}
                    footer={false}
                    onCancel={this.cancelNoFooterModal}
                    className="my-modal"
                >
                    <p>
                        <h1>bla bla bla ...</h1>
                        <button className="btn btn-primary btn-block" onClick={this.cancelNoFooterModal}>:(</button>
                    </p>
                </ReactPopupLayer>

                <ReactPopupLayer
                    title="Custom Footer"
                    visible={visible3}
                    onCancel={this.cancelCustomFooterModal}
                    footer={[
                        <button className="btn btn-default" key="cancel" onClick={this.cancelCustomFooterModal}>cancel</button>,
                        <button key="ok" className="btn btn-primary" onClick={this.customOk}>ok</button>
                    ]}
                    className="my-modal"
                >
                    <p>
                        <h1>bla bla bla ...</h1>
                    </p>
                </ReactPopupLayer>
            </div>
        )
    }
}

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
)