
import '../../styles.css'
import propTypes from 'prop-types'

export default function Button({click}) {
            return (
            <div className='Button-cotainer'>
                <button onClick={click} className='Button' type='button'>LOAD MORE</button>
            </div>
        );
    }

Button.propTypes = {
      click: propTypes.func,
}