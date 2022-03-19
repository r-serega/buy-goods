"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseApp = void 0;
const common_1 = require("@nestjs/common");
const firebase = require("firebase-admin");
const firebase_config_1 = require("./firebase-config");
let FirebaseApp = class FirebaseApp {
    constructor() {
        this.getAuth = () => {
            return this.firebaseApp.auth();
        };
        this.firestore = () => {
            return this.firebaseApp.firestore();
        };
        this.realtime = () => {
            return this.firebaseApp.database();
        };
        this.firebaseApp = firebase.initializeApp({
            credential: firebase.credential.cert(Object.assign({}, firebase_config_1.default)),
            databaseURL: firebase_config_1.default.databaseURL,
        });
    }
    async getUserByEmail(email, response) {
        await this.firebaseApp.auth().getUserByEmail(email)
            .then((userCredential) => {
            const user = userCredential;
            response.send("{\"UID\":\"" + user.uid + "\"}");
        })
            .catch(() => {
            response.send("{\"UID\":\" \"}");
        });
    }
    async getUserByUid(uid, response) {
        await this.firebaseApp.auth().getUser(uid)
            .then((userCredential) => {
            const user = userCredential;
            response.send("{\"email\":\"" + user.email + "\"}");
        })
            .catch(() => {
            response.send("{\"email\":\" \"}");
        });
    }
    async getUserByPhone(phoneNumber, response) {
        await this.firebaseApp.auth().getUserByPhoneNumber(phoneNumber)
            .then((userCredential) => {
            const user = userCredential;
            response.send("{\"UID\":\"" + user.uid + "\"}");
        })
            .catch(() => {
            response.send("{\"UID\":\" \"}");
        });
    }
    async getUserByUidPhone(uid, response) {
        await this.firebaseApp.auth().getUser(uid)
            .then((userCredential) => {
            const user = userCredential;
            response.send("{\"phone\":\"" + user.phoneNumber + "\"}");
        })
            .catch(() => {
            response.send("{\"phone\":\" \"}");
        });
    }
    async getCustomToken(uid, response) {
        await this.firebaseApp.auth().createCustomToken(uid)
            .then((customToken) => {
            console.log(customToken);
            response.send("{\"custom_token\":\"" + customToken + "\"}");
        })
            .catch((error) => {
            console.log('Error creating custom token:', error);
            response.send("{\"custom_token\":\" \"}");
        });
    }
    async verifyIdToken(idToken, response) {
        await this.firebaseApp.auth().verifyIdToken(idToken)
            .then((decodedToken) => {
            const uid = decodedToken.uid;
            console.log(uid);
            response.send("{\"id_token\":\"" + uid + "\"}");
        })
            .catch((error) => {
            console.log('Handle error:', error);
            response.send("{\"id_token\":\" \"}");
        });
    }
};
FirebaseApp = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FirebaseApp);
exports.FirebaseApp = FirebaseApp;
exports.default = FirebaseApp;
//# sourceMappingURL=firebase-app.js.map