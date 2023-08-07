import '../../styles.css'
import propTypes from 'prop-types'

export default function ImageGalleryItem ({data, img}) { 
    
        return (
            data.map(item => {
                       return(<li key={item.id} className="ImageGalleryItem">
                    <img onClick={() => img(item.largeImageURL, item.tags)} className='ImageGalleryItem-image' src={item.webformatURL} alt={item.tags} srcSet={item.largeImageURL } />
            </li>)
        })
 );
    }

ImageGalleryItem.propTypes = {
    data: propTypes.arrayOf(propTypes.object),
    img: propTypes.func,
}