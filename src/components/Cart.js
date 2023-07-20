const Cart =({cartItems}) => {
  return(
    <div>
    <h1>This is your Cart</h1>
    <ul>
      {cartItems.map((item) => (
        <li>
          {item.name} - Quantity: {item.quantity}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Cart