//sets the passport local module as the strategy to be used by passport
var LocalStrategy = require('passport-local').Strategy;
var Users = require('./db.js').Users
var bcrypt = require('bcrypt')

module.exports = function(passport) {
	//required for persistent login sessions
	//passport needs ability to serialize and unserialize users out of session

	//used to serialize user for the session
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	//used to deserialize the user
	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		})
	})

	//using named strategy local-signup since login will be different
	//by default the strategy name would be 'local'
	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true //allows to pass back the entire request to the cb
	},
	function(req, email, password, done){
		//asynchronous
		//User.findOne won't fire unless data is sent back
		process.nextTick(function(){
			//find a user whose email is the same as the forms email
			//check to see if the user trying to login already exists
			User.findOne({'local.email': email}, function(err, user){
				if(err)
					return done(err);
				//checks to see if that user already exists
				if(user){
					return done(null, false, req.flash('signupMessage',
						'That email is already taken.'))
				} else {
					//if there is no user, create that user
					Users.create({
						username: email,
						password: password
					});
					// //set the user's credentials
					// newUser.local.email = email;
					// newUser.local.password = newUser.generateHash(password);
					// //save the user
					// newUser.save(function(err) {
					// 	if(err)
					// 		throw err;
					// 	return done(null, newUser);
					// });
				}
			});
		});
	}));
}

