import { Link } from 'react-router-dom';
import products from './data'
import '../App.css'
import { Button, Card } from 'react-bootstrap';


const Products = () => {
  return (
    
    <Card className='bckrd'>
      <Button>
     <Link to='/' className='wrap'>Home</Link>
    </Button>
    <section className='section'>
      <div className='products'>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Button >
              <Link to={`/products/${product.id}`} className='wrap'>More info</Link>
              </Button>
            </article>
          );
        })}
      </div>
    </section>
    </Card>
  );
};

export default Products;