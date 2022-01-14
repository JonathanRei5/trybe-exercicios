const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Exercício 1 -------------------------------------------------------------------------
console.log('\nExercício 1: ----------------------------------------------\n');

const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
}

customerInfo(order);

// Exercício 2 -------------------------------------------------------------------------
console.log('\nExercício 2: ----------------------------------------------\n');

const obterPedidos = (order) => {
  const pizzas = Object.keys(order.order.pizza);
  const drinks = Object.keys(order.order.drinks).map(drink => order.order.drinks[drink].type);
  let pedidos = [pizzas, drinks].flat().join(', ');

  const lastIndex = pedidos.lastIndexOf(',');
  if (lastIndex !== -1) {
    pedidos = `${pedidos.substring(0, lastIndex)} e${pedidos.substring(lastIndex + 1)}`;
  }

  return pedidos;
}

const orderModifier = (order) => {
  let { total } = order.payment;

  total = total.toString().split('.');
  total[1] = `${(total[1] !== undefined) ? total[1] : ''}00`.slice(0, 2);
  total = total.join(',');

  console.log(`Olá ${order.name}, o total do seu pedido de ${obterPedidos(order)} é R$ ${total}.`);
}

order.name = 'Luiz Silva';
order.payment.total = 50;

orderModifier(order);
