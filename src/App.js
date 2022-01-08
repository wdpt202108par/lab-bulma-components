import React from "react";
import Navbar from "./navbar/Navbar";
import Formfield from "./formfield/FormField";

// import Bulma CSS
import "bulma/css/bulma.css";

const App = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Formfield></Formfield>
		</div>
	);
};

export default App;
