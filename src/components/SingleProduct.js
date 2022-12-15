import { Link, useParams } from 'react-router-dom';
import products from './data';
import '../App.css'
import { Card } from 'react-bootstrap';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name, text } = product;
  return (
    <section className='product bckrd txt'>
      <img src={image} alt={name} />
      <Card>
      <h5 className="wrap text-center">{name}</h5>
      </Card>
      <Card>
      <h5>{text}</h5> 
      </Card>
      <Link to='/products' className="badge bg-primary text-wrap">back to products</Link>
    </section>
  );
};

export default SingleProduct;