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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const firebase_app_1 = require("./firebase-app");
let AppController = class AppController {
    constructor() {
        this.firebaseApp = new firebase_app_1.FirebaseApp();
    }
    getHello() {
        return "buy Goods, version 0.0.1";
    }
    async getUser(request, response) {
        let userName = request.query.name;
        console.log(userName);
        await this.firebaseApp.getUserByEmail(userName, response);
    }
    async getUid(request, response) {
        let uid = request.query.uid;
        console.log(uid);
        await this.firebaseApp.getUserByUid(uid, response);
    }
    async getPhone(request, response) {
        let phoneNumber = request.query.phone;
        console.log("+" + phoneNumber);
        await this.firebaseApp.getUserByPhone("+" + phoneNumber, response);
    }
    async getUidPhone(request, response) {
        let uid = request.query.uid;
        console.log(uid);
        await this.firebaseApp.getUserByUidPhone(uid, response);
    }
    async getTokenByUid(request, response) {
        let uid = request.query.uid;
        console.log(uid);
        await this.firebaseApp.getCustomToken(uid, response);
    }
    async getTokenByEmail(request, response) {
        let email = request.query.email;
        console.log(email);
        await this.firebaseApp.getCustomToken(email, response);
    }
    async getTokenByPhone(request, response) {
        let phone = request.query.phone;
        console.log(phone);
        await this.firebaseApp.getCustomToken(phone, response);
    }
    async verifyIdToken(request, response) {
        let phone = request.query.phone;
        console.log(phone);
        await this.firebaseApp.verifyIdToken(phone, response);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/user'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('/uid'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUid", null);
__decorate([
    (0, common_1.Get)('/phone'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getPhone", null);
__decorate([
    (0, common_1.Get)('/uid_phone'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUidPhone", null);
__decorate([
    (0, common_1.Get)('/token_uid'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTokenByUid", null);
__decorate([
    (0, common_1.Get)('/token_email'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTokenByEmail", null);
__decorate([
    (0, common_1.Get)('/token_phone'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTokenByPhone", null);
__decorate([
    (0, common_1.Get)('/verify_token'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "verifyIdToken", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map