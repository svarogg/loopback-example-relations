module.exports = function(Review) {

	Review.test = function(cb){
		Review.find({"include":[{"order":'customer'}]}, function(err, reviews){
			cb(null, reviews);
		});
	}

    Review.remoteMethod(
	    'test',
	    {
	        returns: {arg: 'reviews', type: 'Array', root: true},
	        description: "blabla.",
	        http: {path: '/test', verb: 'GET'}
	    }
    );
};

