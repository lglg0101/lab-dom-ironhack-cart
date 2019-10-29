
function updateSubtotal($product) {

  //make a new variable that selects the number of the price 
  const $price = Number($product.querySelector('.price span').innerText);
  //make a new variable that selects the input value
  const $quantity = $product.querySelector('.quantity input').valueAsNumber;
  //make a new variable that does the math
  const subtotalValue = $price * $quantity;
  //make a new variable that selects the subtotal span 
  const $subTotal = $product.querySelector('.subtotal span');
//changes the subtotal inner text for the new value
  $subTotal.innerText = subtotalValue;
//returns subtotal value
  return subtotalValue;
}

function calculateAll() {
  const $products = document.getElementsByClassName('product');
  let totalValue = 0;

  for (let $product of $products) {
    totalValue += updateSubtotal($product);
  }

  document.querySelector('#total-value span').innerHTML = totalValue;
}
//button event 

const $calculateTrigger = document.getElementById('calculate');
$calculateTrigger.addEventListener('click', calculateAll);