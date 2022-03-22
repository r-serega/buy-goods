// получаем модуль Express
const express = require("express");
// получаем модуль Cors
const cors = require('cors');
// получаем модуль Firebase-admin
const admin = require('firebase-admin');
// конфигурация приложения Firebase
const serviceAccount = require('./storegoods-9bf75-firebase-adminsdk-nglvo-b7779dc47f.json');
// создаем приложение
const app = express();

const PORT = process.env.PORT || 5000

// инициализация приложения Firebase
const firebaseApp = admin.initializeApp({
  	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://storegoods-9bf75-default-rtdb.firebaseio.com/',
})

// обработка функции middleware
app.use(cors());
//app.use(function (request, response, next) {
//    cors();
//    next();
//});

// устанавливаем обработчик для маршрута "/"
app.get("/", function (request, response) {
    response.end("buy Goods, version 1.0.0");
});

// устанавливаем обработчик для маршрута "/user"
//http://localhost:5000/user?name=Join@i.ua
//https://buy-goods.herokuapp.com/user?name=Join@i.ua
app.get("/user", function (request, response) {
    var userName = request.query.name;
    console.log(userName);
    firebaseApp.auth().getUserByEmail(userName)
        .then((userCredential) => {
            const user = userCredential;
            response.send("{\"UID\":\"" + user.uid + "\"}");
        })
        .catch(() => {
            response.send("{\"UID\":\" \"}");
        });
});

// устанавливаем обработчик для маршрута "/uid"
//http://localhost:5000/uid?uid=rXRID65wvGQDNXBT0bLvWyLrA3G2
//https://buy-goods.herokuapp.com/uid?uid=rXRID65wvGQDNXBT0bLvWyLrA3G2
app.get("/uid", function (request, response) {
    var uid = request.query.uid;
    console.log(uid);
    firebaseApp.auth().getUser(uid)
        .then((userCredential) => {
            const user = userCredential;
            response.send("{\"email\":\"" + user.email + "\"}");
        })
        .catch(() => {
            response.send("{\"email\":\" \"}");
        });
});

// устанавливаем обработчик для маршрута "/phone"
//http://localhost:5000/phone?phone=380973055980
//https://buy-goods.herokuapp.com/phone?phone=380973055980
app.get("/phone", function (request, response) {
    var phoneNumber = request.query.phone;
    console.log("+" + phoneNumber);
    firebaseApp.auth().getUserByPhoneNumber("+" + phoneNumber)
        .then((userCredential) => {
            const user = userCredential;
            response.send("{\"UID\":\"" + user.uid + "\"}");
        })
        .catch(() => {
            response.send("{\"UID\":\" \"}");
        });
});

// устанавливаем обработчик для маршрута "/uid_phone"
//http://localhost:5000/uid_phone?uid=oMPBBzZcLtOTivQlzBvtafvb1Xg2
//https://buy-goods.herokuapp.com/uid_phone?uid=oMPBBzZcLtOTivQlzBvtafvb1Xg2
app.get("/uid_phone", function (request, response) {
    let uid = request.query.uid;
    console.log(uid);
    firebaseApp.auth().getUser(uid)
        .then((userCredential) => {
            const user = userCredential;
            response.send("{\"phone\":\"" + user.phoneNumber + "\"}");
        })
        .catch(() => {
            response.send("{\"phone\":\" \"}");
        });
});

// устанавливаем обработчик для маршрута "/token_uid"
//http://localhost:5000/token_uid?uid=oMPBBzZcLtOTivQlzBvtafvb1Xg2
//https://buy-goods.herokuapp.com/token_uid?uid=oMPBBzZcLtOTivQlzBvtafvb1Xg2
app.get("/token_uid", function (request, response) {
    var uid = request.query.uid;
    console.log(uid);
    firebaseApp.auth().createCustomToken(uid)
        .then((customToken) => {
            console.log(customToken);
            response.send("{\"custom_token\":\"" + customToken + "\"}");
        })
        .catch((error) => {
            console.log('Error creating custom token:', error);
            response.send("{\"custom_token\":\" \"}");
        });
});

// устанавливаем обработчик для маршрута "/token_email"
//http://localhost:5000/token_email?email=Join@i.ua
//https://buy-goods.herokuapp.com/token_email?email=Join@i.ua
app.get("/token_email", function (request, response) {
    var email = request.query.email;
    console.log(email);
    firebaseApp.auth().createCustomToken(email)
        .then((customToken) => {
            console.log(customToken);
            response.send("{\"custom_token\":\"" + customToken + "\"}");
        })
        .catch((error) => {
            console.log('Error creating custom token:', error);
            response.send("{\"custom_token\":\" \"}");
        });
});

// устанавливаем обработчик для маршрута "/token_phone"
//http://localhost:5000/token_phone?phone=380973055980
//https://buy-goods.herokuapp.com/token_phone?phone=380973055980
app.get("/token_phone", function (request, response) {
    var phone = request.query.phone;
    console.log(phone);
    firebaseApp.auth().createCustomToken(phone)
        .then((customToken) => {
            console.log(customToken);
            response.send("{\"custom_token\":\"" + customToken + "\"}");
        })
        .catch((error) => {
            console.log('Error creating custom token:', error);
            response.send("{\"custom_token\":\" \"}");
        });
});

// устанавливаем обработчик для маршрута "/verify_token"
//http://localhost:5000/verify_token?id=<>
//https://buy-goods.herokuapp.com/verify_token?id=%3C%3E
app.get("/verify_token", function (request, response) {
    var idToken = request.query.id;
    console.log(idToken);
    firebaseApp.auth().verifyIdToken(idToken)
        .then((decodedToken) => {
            const uid = decodedToken.uid;
            console.log(uid);
            response.send("{\"id_token\":\"" + uid + "\"}");
        })
        .catch((error) => {
            console.log('Handle error:', error);
            response.send("{\"id_token\":\" \"}");
        });
});

// начинаем прослушивание подключений на 5000 порту
app.listen(PORT, () => console.log(`Сервер начал прослушивание запросов на порту ${ PORT }`));