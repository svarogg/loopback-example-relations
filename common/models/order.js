module.exports = function(Order) {
	Order.test = function(cb){
		Order.find({"include":["customer"]}, function(err, customers){
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
