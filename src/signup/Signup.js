import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";

const Signup = (props) => {
	return (
		<div>
			<Navbar></Navbar>
			<FormField label="Name" type="text"></FormField>
			<FormField label="Email" type="email"></FormField>
			<FormField label="Password" type="password"></FormField>
			<CoolButton isSmall isSuccess className="is-rounded my-class">
				Submit
			</CoolButton>
		</div>
	);
};

export default Signup;
