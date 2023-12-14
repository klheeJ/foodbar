import { OfferItems } from "./lists";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Offer = () => {
  return (
    <div className='bg-[#131313] text-white flex justify-evenly'>
      <div className="mt-12 mb-12">
        <div className="text-3xl border-b border-solid border-white border-1">Offer Products</div>
        <img  className="mt-5 shadow-white shadow-md" src="./public/offer/side.jpg" alt="" />
      </div>

      <div>
        <div className="text-3xl mt-12 border-b border-solid border-white border-1">Sale Products</div>
        <div className="flex flex-col gap-4 mt-5">
          {OfferItems.slice(0,4).map((item)=> (
              <div 
                key={item.id}
                className="flex shadow-white shadow-sm">
                <img src={item.image} alt="" />
                <div className="pr-12 pl-4">
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
        <div className="text-3xl mt-12 border-b border-solid border-white border-1">Trendy Products</div>
        <div className="flex flex-col gap-4 mt-5">
          {OfferItems.slice(4,8).map((item)=> (
              <div 
                key={item.id}
                className="flex shadow-white shadow-sm">
                <img src={item.image} alt="" />
                <div className="pr-12 pl-4">
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
        <div className="text-3xl mt-12 border-b border-solid border-white border-1">Recent Products</div>
        <div className="flex flex-col gap-4 mt-5">
          {OfferItems.slice(8,12).map((item)=> (
              <div 
                key={item.id}
                className="flex shadow-white shadow-sm">
                <img src={item.image} alt="" />
                <div className="pr-12 pl-4">
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
