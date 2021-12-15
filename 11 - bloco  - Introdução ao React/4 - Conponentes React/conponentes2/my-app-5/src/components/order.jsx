// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {

    const drinks = [
    {
      name: 'headphone',
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },
    {
      name: 'energyDrink',
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    },
    {
      name: 'energyDrink',
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }

  ]
    return (
      drinks.map( item => (
      <div>
        bebida: {item.name} - id={item.id} - E-mail:{item.user} product={item.product}
      </div>
    )))
  }
}

export default Order;