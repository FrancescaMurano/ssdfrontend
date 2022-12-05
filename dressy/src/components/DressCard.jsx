import {price_from_cents_to_euro} from "../utils/calculate_price"
import {shuffleImage} from "../utils/shuffleImage"

const DressCard = ({dress}) => {
  console.log(dress)
    return (
      <>
      <div 
          className="flex flex-col p-4 w-45 bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
          <img src={shuffleImage()}
                       className="h-36 w-15 self-center object-cover rounded-tl-md rounded-tr-md"/>
              <h1 className="font-semibold self-center">{dress.brandType}</h1>
              {/* <h3>{dress.brandType}</h3> */}
              <h3>Material: {dress.materialType}</h3>
              <h3>Color: {dress.colorType}</h3>
              <h3>Size: {dress.size}</h3>
            <div className="flex flex-row">
              <p className="text-sm mr-3 text-center">${price_from_cents_to_euro(dress.priceInCents)}/day</p>
              <button className="bg-blue-800 text-center pl-2 pr-2 ">+</button>
            </div>  
      </div>
    </>
  
    );
}
export default DressCard;