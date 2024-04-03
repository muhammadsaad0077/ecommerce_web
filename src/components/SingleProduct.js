import ProductPage from './ProductPage';

const SingleProduct = ({ image, price, rating, title, category, id, desc }) => {
    
return (
    <ProductPage image={image} title={title} price={price} category={category} rating={rating} id={id} desc={desc} />
  )
}

export default SingleProduct
