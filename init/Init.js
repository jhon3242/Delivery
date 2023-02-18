
const mysql = require('mysql');

const {UserRepository} = require('../repository/UserRepository.js')
const { User } = require('../domain/User.js');
const { readCsv } = require('./Readline.js');
const util = require('util');


function initUser(connection){
	let userRepo = new UserRepository();
	connection.query("SELECT * FROM User", function(err, results) {
		for (let user of results){
			console.log(user);
			userRepo.addUser(new User(user.name, user.password));
		}
	})
}

async function initDB(){
	const connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'delivery'
	});

	const connect = util.promisify(connection.connect).bind(connection);
	const query = util.promisify(connection.query).bind(connection);
	connect((err) => {
		if (err) throw err;
		console.log('Connected to MySQL server!');
	});

	await query("SELECT * FROM User", function(err, results) {
		for (let user of results){
			console.log(user);
			// userRepo.addUser(new User(user.name, user.password));
		}
		connection.end();
	})
	
}

// function initCsv(){
// 	initStore();
// 	initFood();
// 	connection.end();
// }

// function initStore(){
// 	let csvArr = readCsv("store.csv");
// 	csvArr.splice(0, 1);
// 	for (let info of csvArr){
// 		connection.query(`INSERT INTO Store (name, chefCount)values (${info})`)
// 	}
// }

// function initFood(){
// 	let csvArr = readCsv("food.csv");
// 	csvArr.splice(0, 1);
// 	for (let info of csvArr){
// 		connection.query(`INSERT INTO Food (name, time, cost)values (${info})`)
// 	}
// }

// initCsv();

exports.initDB = initDB;



