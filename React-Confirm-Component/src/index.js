import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Button from './react-ui/Button'

class App extends React.Component{
    render(){
        return(
            <div>
                <Button type='primary'></Button>
            </div>
        )
    }
    // async componentDidMount(){
    //     let res = await confirm("确定删除吗？")
    //     if(res){
    //         console.log("是")
    //     } else{
    //         console.log("否")
    //     }
    // }
}

ReactDOM.render(<App name='func component'/>, document.getElementById('root'));