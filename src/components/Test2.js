import React, { useState, useEffect } from "react";

const fetchInstruments = () => {
	return "hello";
};

function Test2() {
	const [instruments, setInstruments] = useState();

	useEffect(() => {
		fetchInstruments().then((fetchedInstruments) => {
				setInstruments(fetchedInstruments);
			})
			.then(() => console.log(instruments)); //this is undefined
	}, []);

	return <h1>Hello</h1>;
}

export default Test2;
