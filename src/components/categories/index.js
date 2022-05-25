import { fakeDataCategories } from 'src/data';
import CardCategory from '../cardCategories';

import './styles.css';

const Categories = () => {      

    return(
        <>
        <h1 className='title'>Categorías</h1>
        <div className="containerMain">
            {fakeDataCategories.map(({id, image, title, description, })=>
                <CardCategory key={id} image={image} title={title} description={description}></CardCategory>
            )}
        </div>
        </>
        
    );

 }

 export default Categories;