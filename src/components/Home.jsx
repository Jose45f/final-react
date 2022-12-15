import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import '../App.css'

const Home = () => {
return (
	<div>
	<h1 className="top">Home Page</h1>
	<Card className='bckrd'>
      <Button>
     <Link to='/About' className='wrap'>About</Link>
    </Button>
	<h4>Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </h4>
	</Card>
	<br />
	</div>
);
};

export default Home;
