import propTypes from 'prop-types';

export default function Loader({children}) {
    
        return (
            <div className="Loader" >
                {children}
            </div>
        );
    }

Loader.propTypes = {
    children: propTypes.node,
}