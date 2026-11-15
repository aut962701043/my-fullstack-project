require('dotenv').config();
const Stripe = require('stripe');
console.log("Key:", process.env.STRIPE_SECRET_KEY?.slice(0,12));
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
async function test(){
  try{
    const acc = await stripe.accounts.retrieve();
    console.log("✅ STRIPE WORK AAGUDHU!", acc.email);
  } catch(e){
    console.log("❌ ERROR:", e.message);
  }
}
test();