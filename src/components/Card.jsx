import { useState } from 'react';
import './Card.css';
const Card = (props) => {

   console.log(props.data);
const [showAddToCart,setShowAddToCart]=useState(true);
const [showRemoveFromCart,setShowRemoveFromCart]=useState(false);

const showButton=(e)=>{
  
    setShowAddToCart(!showAddToCart)
    setShowRemoveFromCart(!showRemoveFromCart)
  
}
const increment=(e)=>{
  props.onCountChange('increment')
}
const decrement=(e)=>{
  props.onCountChange('decrement')
}

  return (
    <div className="col mb-5">
  <div className="card h-100">

  <div className="badge bg-dark text-white position-absolute" >Sale</div>
  <img className="card-img-top" src={props.data.url} alt="..."/>
 
  <div className="card-body p-4">
      <div className="text-center">
         
          <h5 className="fw-bolder">{props.data.name}</h5>
      
          <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
          </div>
       
          <span>{props.data.price}</span>
          <p>{props.data.description}</p>
        
      </div>
  </div>
  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      {showAddToCart && <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={()=>{showButton();increment();}} >Add to cart</a></div>}
{showRemoveFromCart && <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={()=>{showButton();decrement();}} >Remove from cart</a></div>}
  </div>
</div>
</div>
)

}
export default Card;