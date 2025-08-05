import '../styles/Cart.css';

function Cart() {
const monsteraPrice = 8
const ivyPrice = 10
const flowerPrice = 15
return (<div className='cart'>
    <h2>Panier</h2>
    <ul>
    <li>Rougail Saucisse : {monsteraPrice}€</li>
     <li>Civet Poulet : {ivyPrice}€</li>
     <li>Rougail Morue : {flowerPrice}€</li>
    </ul>
      Total : {monsteraPrice + ivyPrice + flowerPrice }€
      </div>)
}

export default Cart;
