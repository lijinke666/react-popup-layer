### react-popup-layer example
---

```
$ npm run example
```
Then open `localhost:8080/example/build` in a browser .

#### 
```
import React from "react"
import ReactDOM from "react-dom"
import Modal from "react-popup-layer"

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
```