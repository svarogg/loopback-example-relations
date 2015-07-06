module.exports = function(Customer) {
	Customer.test = function(cb){
		console.log(1);
		Customer.find({"include":["reviews","orders"]}, function(err, customers){
			console.log(2);
			console.log(customers);
			cb(null, customers);
		});
	}

    Customer.remoteMethod(
	    'test',
	    {
	        returns: {arg: 'customers', type: 'Array', root: true},
	        description: "blabla.",
	        http: {path: '/test', verb: 'GET'}
	    }
    );
};
