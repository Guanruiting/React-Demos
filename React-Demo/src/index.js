import React,{Component,useState} from 'react';
import ReactDOM from 'react-dom';
import Button from './react-ui/Button'
import Icon from "./react-ui/Icon";

class App extends React.Component{
    render(){
        return(
            <div>
                <Button type='warning'>
                    <Icon name='delete'/>
                    删除</Button>
            </div>
        )
    }
    componentDidMount(){
        let res = confirm("确定删除吗？")
        if(res){
            console.log("是")
        } else{
            console.log("否")
        }
    }
}

const confirm = (str)=>{
    return (
        <div>str</div>
    )
}

ReactDOM.render(<App name='func component'/>, document.getElementById('root'));