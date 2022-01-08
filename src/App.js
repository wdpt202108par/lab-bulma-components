import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";

// import Bulma CSS
import "bulma/css/bulma.css";

const App = () => {
	return (
		<div>
			<Navbar></Navbar>
			<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
			<FormField
				label="Email"
				type="email"
				placeholder="e.g. alexsmith@gmail.com"
			/>

			<CoolButton isSmall isDanger className="is-rounded my-class">
				Login
			</CoolButton>

			<CoolButton isSmall isSuccess className="is-rounded my-class">
				Signup
			</CoolButton>
		</div>
	);
};

export default App;
