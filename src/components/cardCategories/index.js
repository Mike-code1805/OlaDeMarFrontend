import './styles.css';
import { useRouter } from '../hooks/useRouter';

const CardCategory = ( {image, title, description} ) => {
  
  const { gotoExplore } = useRouter();

  return (
    <div className="a-box">
        <div className="img-container">
            <div className="img-inner">
            <div className="inner-skew">
                <img src={image} onClick={gotoExplore} alt=""></img>
            </div>
            </div>
        </div>
        <div className="text-container">
            <h3 onClick={gotoExplore}> {title} </h3>
            <div onClick={gotoExplore}> {description} </div>
        </div>
    </div>
  )
}


export default CardCategory;