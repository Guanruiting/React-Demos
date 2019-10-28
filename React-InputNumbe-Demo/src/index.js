import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputNumber from './inputNumber'

function App(){
    const [value] = useState('0');
    return (
        <div>
            <InputNumber value={value} bindChange={e=>{
                console.log(e.target.value)
            }}/>
            <InputNumber defaultValue={value} bindChange={e=>{
                console.log(e.target.value)
            }}/>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));