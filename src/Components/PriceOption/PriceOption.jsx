import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    console.log(features)
 
      
    return (
        <div className='bg-yellow-200  rounded-xl p-5 drop-shadow-lg flex flex-col' >
            <h2>
                <span className='text-3xl font-medium'>{price}</span>
                <span className=''>/month</span>
            </h2>
           
           <h4 className='text-4xl font-medium'>{name}</h4>
          <div className='mt-5 flex-grow'>
          {
               
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
               
            }
          </div>
          <div className='mt-3 flex  justify-center'>
          <button className='btn flex-grow bg-yellow-400 drop-shadow-xl '>Buy Now</button>
          </div>
         
        </div>
    );
};

PriceOption.propTypes={
    option: PropTypes.object
}

export default PriceOption;