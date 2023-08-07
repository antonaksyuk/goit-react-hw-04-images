import { useEffect } from 'react';
import '../../styles.css';
import propTypes from 'prop-types'

export default function Modal({toggle, prop, prop2}) { 

    const onImageClick = event => {
        if (event.target.nodeName === 'IMG') {
            toggle();
        }
    };

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      toggle();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        toggle();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [toggle]);
  
         return (
              <div onClick={handleOverlayClick} className="Overlay">
                  <div className="Modal">
                      <img onClick={onImageClick} src={prop} alt={prop2} />
                  </div>
              </div>
          );
    }


Modal.propTypes = {
    toggle: propTypes.func,
    prop: propTypes.string,
    prop2: propTypes.string,
}