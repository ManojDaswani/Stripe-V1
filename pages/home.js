import React, {Component} from "react"
import {loadStripe} from '@stripe/stripe-js';
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';



const CheckoutForm = () => {
    const stripe = useStripe();
    return (<form>
        <CardElement />
        <button type="submit" disabled={!stripe}>Pay</button>
    </form>)
};

const stripePromise = loadStripe("pk_test_51H7nBDEcUITwNRuUsGQtnAXDWYXCCdoqaGzYMU1S2uzxINitRbEZa1z85z3paCuIs0yqiVdesWB7X3mIeM890G5J00KXIFD7k5");
class Home extends Component {
    render() {
        return (
            <Elements stripe={stripePromise}>
                <CheckoutForm /> Welcome home Hooray....!!!!
                {/* <script src="./reload.js"></script>  */}
                {/* <script src='/reload.js' > </script> */}
            </Elements> 
        );
    }
}

export default Home