import React from 'react';
import ReactDOM from 'react-dom';
import Confirm from "./confirm";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tips: 'loaded'
        }
    }
    render() {
        return(
            <div>
                {this.state.tips}
            </div>
        )
    }
    async  componentDidMount(){
        let res = await Confirm('确定删除吗?');
        if(res) {
            console.log("是")
        } else {
            console.log("否")
        }
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
