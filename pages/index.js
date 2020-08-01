import React, { Component } from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
// import Link from 'next/link'
import Image from '../pages/image.js'
// import { render } from 'react-dom';
// import dynamic from 'next/dynamic'

// import '../pages/_app.js'
import axios from 'axios'



const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });
        if (!error) {
            const { id } = paymentMethod;
            try {
                const { data } = await axios.post("/api/charge", { id, amount: 1099 });
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (<div className="hvrbox" >
        <link rel="shortcut icon" href="favicon.ico" />
        <form onSubmit={handleSubmit} style={{ maxWidth: "800px", margin: "0 auto" }}> 

<div className="hvrbox">
	<img src="/static/images/enchilado.png" alt="spanish_enchilado_with rice" className="hvrbox-layer_bottom"/>
	<div className="hvrbox-layer_top">
		<div className="hvrbox-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.</div>
	</div>
</div>
        <h2>Price : $10.99 USD</h2>    
         <img src = "/static/images/enchilado.png"
                alt = "spanish_enchilado_with rice" style={{maxWidth: '100%' }}
                className="hvrbox-layer_bottom" />
            
        <h2>Price : $10.99 USD</h2>  
        <div className = "hvrbox-layer_top" >
                <div className="hvrbox-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce porttitor ligula porttitor, lacinia sapien non.
        </div>
                
            {/* /* <Link href="./enchilado.png">
                      <a>enchilado</a>
                    </Link> */ }
            <Image/> 
                {/* <div> <img src = {Image}/></div > */ }
                {/* <link rel="shortcut icon" href="favicon.ico" /> */}
                {
            /* adding above line - href="favicon.ico"will remove favicon.io error */ } {
            /* <img src="/static/images/enchilado.png" style={{ maxWidth: "100%" }} alt="spanish_enchilado_with rice" /> */ }

        <CardElement/>
                <button type="submit" disabled={!stripe}> Pay </button>
                </div>
        </form>           
    </div>            
    );
};

const stripePromise = loadStripe("pk_test_XXXXXXXXX");

class Home extends Component {
    render() {
        return (
            <Elements stripe={stripePromise} >
            <CheckoutForm /> Welcome home Hooray--change....!!!!
        </Elements> 
        );
    }
}


{/* 
const Home = dynamic(()=>import('./home'),{ */}
{/* //     loading:() => <div>loading content..</div>
// })
// const App = () => (
//     <div>  
//         <Home/>      
//     </div>
// )

// export default App;
// export default () => (<div>Hello World!!</div>); */}

export default Home
