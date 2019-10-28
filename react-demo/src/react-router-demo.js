import React from "react";
import {Route,BrowserRouter} from 'react-router-dom'
// import {createBrowserHistory} from 'history'
// let BrowserHistory = createBrowserHistory()
class AA extends React.Component{
	render() {
		return (
			<div>
				aaa
			</div>
		);
	}
}
class BB extends React.Component{
	render() {
		return (
			<div>
				bba
			</div>
		);
	}
}



function App() {
	return (
		<div className="App">
			<BrowserRouter basename={'/users'}>
				<header className="App-header" >
					<div>header</div>
					<Route path='/aa' component={AA}/>
					<Route path='/bb' component={BB}/>
				</header>
			</BrowserRouter>

		</div>
	);
}

export default App
