module.exports = function(Order) {
	Order.test = function(cb){
		console.log(1);
		Order.find({"include":["customer"]}, function(err, customers){
			console.log(2);
			console.log(customers);
			cb(null, customers);
		});
	}

    Order.remoteMethod(
	    'test',
	    {
	        returns: {arg: 'orders', type: 'Array', root: true},
	        description: "blabla.",
	        http: {path: '/test', verb: 'GET'}
	    }
    );
};
