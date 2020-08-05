import Stripe from "stripe";
const stripe = new Stripe("sk_test_51H7nBDEcUITwNRuUpkjDU0LqDqLDoNGpq9ooBdqgguyvDeDXzbIOlHo7hZBWCz5mUxLnj1b7pGYoh2QisiIKC56b00K6IW3r8T");

export default async (req, res) => {
    const {
        id,
        amount
    } = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "cheddar che",
            payment_method: id,
            confirm: true
        });
        console.log(payment);
        return res.status(200).json({
            confirm: "abc123"
        });
    } catch (error) {

    }
};
