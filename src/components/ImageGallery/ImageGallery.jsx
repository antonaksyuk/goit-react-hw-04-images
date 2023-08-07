import '../../styles.css';
import propTypes from 'prop-types'

export default function ImageGallery({children}) { 
            return (
            <ul className="ImageGallery">
                {children}
            </ul>
        );
    }


ImageGallery.propTypes = {
    children: propTypes.node,
}