import { propertiesData } from '../data/data';

const Properties = () => {
  return (
    <div className="product">
        <div className="p-heading">
            <h3>Properties</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
        <div className="product-container">
            {
                propertiesData.map ((property, i) => {
                    return (
                        <div className="p-box">
                            <img src={property.image} alt='product' />
                            <p>{property.name}</p>
                            <a href="#" className="price">Rs. {property.price}/-</a>
                            <a href="#" className="buy-btn">Add to Cart</a>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
};

export default Properties;
