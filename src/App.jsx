import Card from "./components/Card";
import "./App.css";
import { useState } from "react";

// Component: App
const App = () => {
  const [count,setCount]=useState(0);
  const handleCount=(value)=>{
    if(value=='increment'){
      setCount(count+1)
    } else {
      setCount(count-1)
    }
  }

  const cardData = [
    {
      name:"iPhone",
      price:"$500",
      description:"Brand new phone",
      url:"https://pak.net.pk/wp-content/uploads/2018/08/Apple-IPhone-X--450x300.jpg"
    },
    {
      name:"Samsung",
      price:"$300",
      description:"Brand new version",
      url:"https://img.mensxp.com/media/content/2023/Jan/Samsung_Galaxy_S23_1673991602_0_0_63d908b46ef22.jpeg?w=450&h=300.23"
    },
    {
      name:"Nokia",
      price:"$50",
      description:"Secondhand phone",
      url:"https://www.techguide.com.au/wp-content/uploads/2024/05/Nokia3210Revival2-450x300.jpeg"
    }
  ]

  return (
    <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Shopping</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
   
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   
                        
                    
     {
        cardData.map((data, index) => (
          <Card
            key={index}
            data={data}
            onCountChange={handleCount}
          />

        ))
      }
      
    </div>
                </div>
         
        </section>
    

</body>
  )
}


export default App;