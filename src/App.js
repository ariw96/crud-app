import React from "react";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<>
			<div>
							
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/adduser" component={AddUser} />
					<Route  path="/edit/:id" component={EditUser} />
				</Switch>
			</div>
		</>
	);
}
export default App;
