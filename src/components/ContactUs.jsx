import React from "react";
import { Link, Navigate } from "react-router-dom";
import '../App.css'

const ContactUs = () => {
return (
	<div>
	<h1>Contact Us Page</h1>
	<Button onClick={() =>Navigate('/Home')}>Home </Button>
	</div>
);
};

export default ContactUs;
