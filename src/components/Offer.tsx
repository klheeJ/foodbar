import { OfferItems } from "./lists";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Offer = () => {
  return (
    <div className='bg-[#131313] text-white flex justify-evenly'>
      <div className="mt-12">
        <div className="text-3xl">Offer Products</div>
        <img  className="mt-5" src="./public/offer/side.jpg" alt="" />
      </div>

      <div>
        <div className="text-3xl mt-12">Sale Products</div>
        <div className="mt-5">
          {OfferItems.slice(0,4).map((item)=> (
              <div 
                key={item.id}
                className="flex">
                <img src={item.image} alt="" />
                <div>
                  <div>{item.name}</div>
                  <div className="text-yellow-600">
                    {[...Array(5)].map(() => (
                    <FontAwesomeIcon icon={faStar} />))}
                  </div>
                  <div><span className="line-through">{item.prevPrice}</span> {item.currentPrice}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
      
      <div>
        <div className="text-3xl mt-12">Trendy Products</div>
        <div className="mt-5">
          {OfferItems.slice(4,8).map((item)=> (
              <div 
                key={item.id}
                className="flex">
                <img src={item.image} alt="" />
                <div>
                  <div>{item.name}</div>
                  <div className="text-yellow-600">
                      {[...Array(5)].map(() => (
                      <FontAwesomeIcon icon={faStar} />))}
                  </div>
                  <div><span className="line-through">{item.prevPrice}</span> {item.currentPrice}</div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div>
      <div>
        <div className="text-3xl mt-12">Recent Products</div>
        <div className="mt-5">
          {OfferItems.slice(8,12).map((item)=> (
              <div 
                key={item.id}
                className="flex">
                <img src={item.image} alt="" />
                <div>
                  <div>{item.name}</div>
                  <div className="text-yellow-600">
                      {[...Array(5)].map(() => (
                      <FontAwesomeIcon icon={faStar} />))}
                  </div>
                  <div><span className="line-through">{item.prevPrice}</span> {item.currentPrice}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Offer
