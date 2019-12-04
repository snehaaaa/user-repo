import React from 'react';
import './App.css';
import USERLIST from "./userssModule";
import { Route, Router  } from "react-router-dom";
import UserPost from "./userssPosts";
import UserPostDetail from "./userPostDetail";
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

function App() {
	return (
		<div className="App">
			<Router history={history}>
				<div>
					<Route exact  path="/"  render={history => <USERLIST location={history} />}/>
					<Route  path="/posts/:userId"  component={UserPost} />
					<Route  path="/postsdetail/:id"  component={UserPostDetail} />
				</div>
			</Router>
		</div>
	);
}

export default App;
