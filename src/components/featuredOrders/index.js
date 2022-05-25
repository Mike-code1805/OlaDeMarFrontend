import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fakeDataCategories, fakeDataFeaturedOrders } from "src/data";
import { addProduct } from "src/redux/cartRedux";
// import { fakeDataFeaturedOrders } from "src/data";
import CardFeaturedOrders from "../cardFeaturedOrders";

import './styles.css';

const FeaturedOrders = () => {      

    const [products, setProducts] = useState([]);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGM0NDY0ZmY3MjAyMTYzMTU3ODVjOSIsImlhdCI6MTY1MzQxNDM1MSwiZXhwIjoxNjUzNDE3OTUxfQ.SUrQ_wzk4VWpKCQtXCeWSLv11PoZeXneIEXfIdYTqMs';
    const dispatch = useDispatch();

	const [product, setProduct] = useState({});
    const [quantity] = useState(1);
    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios
            .get('http://localhost:4000/api/products', {
            headers: {
                'Authorization': `token ${token}`
            }
            });
            
            setProducts(res.data);
          } catch (err) {}
        };
        getProducts();
    }, []);

    

    return(
        <>
        <h1 className="title">Pedidos Destacados</h1>
        <div className="containerMain">
            {fakeDataFeaturedOrders.map(({id, title, information, description, image, price})=>
                <CardFeaturedOrders 
                key={id} 
                id={id}
                title={title}
                information={information} 
                description={description}  
                image={image} 
                price= {price} ></CardFeaturedOrders>
            )}
        </div>
        </>
        
    );

 }

export default FeaturedOrders;