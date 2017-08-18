import React from "react"
import ReactDOM from "react-dom"
import ReactPopupLayer from "../src/index"
import Button from "rc-button"
import Message from "rc-message"

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
                    <li style={margin}><Button type="primary" onClick={this.openModal}>open Modal</Button></li>
                    <li style={margin}><Button type="success" onClick={this.openNoFooterModal}>open no footer Modal</Button></li>
                    <li style={margin}><Button type="orange" onClick={this.openCustomFooterModal}>open custom footer Modal</Button></li>
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
                        <Button type="primary block" onClick={this.cancelNoFooterModal}>:(</Button>
                    </p>
                </ReactPopupLayer>

                <ReactPopupLayer
                    title="Custom Footer"
                    visible={visible3}
                    onCancel={this.cancelCustomFooterModal}
                    footer={[
                        <Button key="cancel" onClick={this.cancelCustomFooterModal}>cancel</Button>,
                        <Button key="ok" type="primary" onClick={this.customOk}>ok</Button>
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