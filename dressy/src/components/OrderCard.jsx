import dress_img from "../assets/dresses/1.jpg"
import {calculate_price,price_from_cents_to_euro} from "../utils/calculate_price";
const OrderCard = ({order}) => {
  order = 
  {
    "id": "5f9c17cd-ff58-438c-8b89-e97631039f1a",
    "startDate": "2022-11-26",
    "endDate": "2022-12-13",
    "dress": "28bce53b-6c7e-478b-ab85-a5f2066a5278",
    "loaner": 2,
    "totalPrice": 850.0,
    "loanDurationDays": 17,
    "insertBy": 1
  }
    return (
      <>
      <div 
          className="flex flex-col p-5 m-5 w-full bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
          <img src={dress_img}
                       className="h-36 w-15 self-center object-cover rounded-tl-md rounded-tr-md"/>
              <h1 className="font-semibold">Product Two</h1>
              <h3>StartDate</h3>
              <h3>EndDate</h3>
              <h3>Dress</h3>
              <h3>totalPrice</h3>
              <h3>loanDurationDays</h3>
            <div className="flex flex-row">
              <p className="text-sm mr-3 text-center">$69.69</p>
              <button className="bg-blue-800 text-center pl-2 pr-2 ">+</button>
            </div>  
      </div>
    </>
  
    );
}
export default OrderCard;