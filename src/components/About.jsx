import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import '../App.css'


const About = () => {
  return (
	<div>
	<h1 className="top">About Page</h1>
	<Card className='bckrd'>
      <Button>
     <Link to='/products' className='wrap'>Products</Link>
    </Button>
	<h4>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. </h4>
	</Card>
	<br />
	</div>
);
};
export default About;