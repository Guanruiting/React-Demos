import React,{Component,useState} from 'react';
import ReactDOM from 'react-dom';
import Button from './react-ui/Button'
import Icon from "./react-ui/Icon";

// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <Button type='warning'>
//                     <Icon name='delete'/>
//                     删除</Button>
//             </div>
//         )
//     }
    // componentDidMount(){
    //     let res = confirm("确定删除吗？")
    //     if(res){
    //         console.log("是")
    //     } else{
    //         console.log("否")
    //     }
    // }
// }

class Child extends Component{
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
    componentDidMount() {
        console.log('mount',this.props.name)
    }
    componentDidUpdate() {
        console.log('update',this.props.name)
    }
    componentWillUnmount() {
        console.log('unmount',this.props.name)
    }

}
class App extends Component{
    state = {
        list: ['a','b','c']
    }
    render() {
        return (
            <div>
                {this.state.list.map(item => <Child key={item} name={item}/>)}
                <button onClick={e => {
                    this.setState({
                        list: ['b','c','d']
                    })
                }}>set</button>
            </div>
        );
    }
}
ReactDOM.render(<App name='func component'/>, document.getElementById('root'));