
import PropTypes from 'prop-types';
import { BsCheck2Circle } from 'react-icons/bs';
const Feature = ({feature}) => {

    return (
        <div className='flex gap-2 items-center mt-1'>
            <BsCheck2Circle className='text-green-600 text-xl'></BsCheck2Circle>
            <p>{feature}</p>
        </div>
    );
};
Feature.propTypes={
    feature: PropTypes.string
}
export default Feature;