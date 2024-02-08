import PropTypes from 'prop-types';

FeatureItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

const FeatureItem = ({icon, title, children}) => {
    return (
        <div className='feature-item'>
            <img src={icon} alt='Feature Icon' className='feature-icon' />
            <h3 className='feature-item-title'>{title}</h3>
            <p>{children}</p>
        </div>
    );
}

export default FeatureItem;