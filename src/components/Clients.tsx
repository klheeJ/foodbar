import { clientReviews } from "./lists"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Clients = () => {
  return (
    <div className="bg-[#3E3D3D]">
      <div>Clients Say</div>
      <div className="flex justify-evenly">
        {clientReviews.map((review)=> {
            return (
                <div className="flex">
                    <div>
                        <img src={review.image} alt="" />
                    </div>
                    <div>
                        <div className="text-yellow-300">
                        {[...Array(5)].map(() => (
                        <FontAwesomeIcon icon={faStar} />))}
                        </div>
                        <div>{review.review}</div>
                        <div>{review.name}</div>
                    </div>
                </div>
            )
        }
        )}
      </div>
    </div>
  )
}

export default Clients
