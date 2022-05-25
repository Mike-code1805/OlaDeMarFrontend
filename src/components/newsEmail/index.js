
import KeyIcon from '../shared/icons/MailIcon';
import './styles.css';

const Newsletter = () => {
    return (
      <div className='Container'>
        <h1 className='title'>Informativo</h1>
        <h2 className='subtitle'>Obtenga actualizaciones oportunas de sus productos favoritos.</h2>
        <div id='inputContainer'>
          <input id='input' placeholder="Tu correo" />
          <button id='button'>
            <KeyIcon />
          </button>
        </div>
      </div>
    );
};

export default Newsletter;