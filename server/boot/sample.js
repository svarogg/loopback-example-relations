var Q = require('Q');
module.exports = function (app) {



////////////// creating customers /////////////////////
  var Customer = app.models.Customer;
  var Order = app.models.Order;
  var Review = app.models.Review;

  var customerA, customerB;
  var orderA;
  // define a custom scope
  Customer.scope('youngFolks', {where: {age: {lte: 22}}});

  //app.dataSources.db.automigrate('Customer', function (err) {
  //  if (err) throw err;
  //});
  Q.all([
    Q.ninvoke(Customer, "create", {name: 'Customer A', age: 21}),
    Q.ninvoke(Customer, "create", {name: 'Customer B', age: 22}),
    Q.ninvoke(Customer, "create", {name: 'Customer C', age: 23}),
    Q.ninvoke(Customer, "create", {name: 'Customer D', age: 24})
  ]).then(function (customers) {
      customerA = customers[0];
      customerB = customers[1];

      console.log("customer A", customerA);
      //app.dataSources.db.automigrate('Order', function (err) {
      //  if (err) throw err;
      //});

      Q.all([
        Q.ninvoke(Order, "create", {description: 'Order A', total: 200.45, customer: customerA}),
        Q.ninvoke(Order, "create", {description: 'Order B', total: 100, customer: customerA}),
        Q.ninvoke(Order, "create", {description: 'Order C', total: 350.45, customer: customerA}),
        Q.ninvoke(Order, "create", {description: 'Order E', total: 10}),
        Q.ninvoke(Order, "create", {description: 'Order D', total: 150.45, customer: customerB})
      ]).then(function (orders) {

          orderA = orders[0];
          console.log("order A", orderA);
          //app.dataSources.db.automigrate('Review', function (err) {
          //  if (err) throw err;
          //});

          console.log("here are the orders: ", orders);

          Q.all([
            ///uncomment the first review in order to resolve issue
            //Q.ninvoke(Review, "create", {product: 'Product1', star: 3, order: orderA}),
            Q.ninvoke(Review, "create", {product: 'Product2', star: 2}),
            Q.ninvoke(Review, "create", {product: 'Product5', star: 5})
          ]).then(function () {
              console.log('Done sample');
            });

        });
    });
};
