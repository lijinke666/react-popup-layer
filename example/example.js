import React from "React"
import ReactDOM from "react-dom"
import Modal from "../src/Modal"
import Button from "../src/Button"

const margin = {
    "margin": "10px 0"
}

class Demo extends React.PureComponent {
    state = {
        visible: false,
        visible2: false,
    }
    openModal = () => {
        this.setState({ visible: true })
    }
    closeModal = () => {
        this.setState({ visible: false })
    }
    openNoFooterModal = ()=>{
         this.setState({ visible2: true })
    }
    closeNoFooterModal = ()=>{
        this.setState({ visible2: false })
    }
    render() {
        const { visible,visible2 } = this.state
        return (
            <div>
                <h2>Example</h2>
                <hr/>

                <h4>1.Modal</h4>
                <ol>
                    <li style={margin}><Button type="primary" onClick={this.openModal}>open Modal</Button></li>
                    <li style={margin}><Button type="primary" onClick={this.openNoFooterModal}>open no footer Modal</Button></li>
                </ol>
         
                <hr />
                <h4>2.Some buttons are provided by the way,if you want to use</h4>
                <ol>
                    <li style={margin}><Button type="success">success</Button></li>
                    <li style={margin}><Button type="info">info</Button></li>
                    <li style={margin}><Button type="error">error</Button></li>
                    <li style={margin}><Button type="warning">warning</Button></li>
                    <li style={margin}><Button type="primary">primary</Button></li>
                    <li style={margin}><Button>default</Button></li>
                    <li style={margin}><Button type="disable">disable</Button></li>
                    <li style={margin}><Button type="primary block">block</Button></li>
                </ol>





                <Modal
                    title="example title"
                    visible={visible}
                    footerTitle={"快快消失"}
                    onCancel={this.closeModal}
                    className="my-modal"
                >
                    <p>
                        <h1>bla bla bla ...</h1>
                    </p>
                </Modal>
                <Modal
                    title="wtf!! 我居然没有脚!"
                    visible={visible2}
                    footer={false}
                    onCancel={this.closeModal}
                    className="my-modal"
                >
                    <p>
                        <h1>bla bla bla ...</h1>
                        <Button type="primary block" onClick={this.closeNoFooterModal}>没关系我自己长一个</Button>
                    </p>
                </Modal>
            </div>
        )
    }
}

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
)

