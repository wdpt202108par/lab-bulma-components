import React from "react";
import "bulma/css/bulma.css";

function CoolButton(props) {
	let klass = `button ${props.className}`; // "is-rounded my-class"
	if (props.isDanger) {
		klass += "is-danger";
	}
	if (props.isSuccess) {
		klass += " is-success";
	}

	// si on a recu la prop isSmall => rajouter la classe 'is-small' a `klass`
	// si on a recu la prop isDanger => rajouter la classe 'is-danger' a `klass`

	return (
		<div>
			<button className={klass}> {props.children}</button>
		</div>
	);
}

export default CoolButton;
