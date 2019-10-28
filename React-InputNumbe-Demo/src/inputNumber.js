import React from 'react';
import PropTypes from 'prop-types';
class InputNumber extends React.Component{
    constructor(props){
        super(props);
        this.state={
            stringValue: '我是受控组件'
        }
    }
    static propTypes = {
        value: PropTypes.number,
        bindChange: PropTypes.func,
        defaultValue: PropTypes.number,
    }
    render(){
        const {
            value,
            defaultValue,
            bindChange,
            ...rest
        } = this.props;

        return(
            <React.Fragment>
            { !defaultValue && <input type="number" placeholder="受控组件" value={this.state.stringValue}  {...rest}
                onChange={(e)=>{
                    this.setState({ stringValue: e.target.value })
                    bindChange(e);
                }} /> }
            { defaultValue && <input type="number" placeholder="非受控组件" value={defaultValue} {...rest}
                onChange={(e)=>{
                    bindChange(e);
                }} /> }
            </React.Fragment>
        )
    }
}
export default InputNumber;