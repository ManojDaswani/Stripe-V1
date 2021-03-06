import Stripe from "stripe";
const stripe = new Stripe("sk_test_XXX");

export default async (req, res) => {
    const {
        id,
        amount
    } = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "cheddar cheese",
            payment_method: id,
            confirm: true
        });
        console.log(payment);
        return res.status(200).json({
            confirm: "xyz"
        });
    } catch (error) {

    }
};
