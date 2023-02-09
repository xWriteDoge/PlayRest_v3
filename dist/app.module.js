"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const juego_module_1 = require("./juego/juego.module");
const usuario_module_1 = require("./usuario/usuario.module");
const mongoose_1 = require("@nestjs/mongoose");
const juego_schema_1 = require("./juego/schema/juego.schema");
const usuario_schema_1 = require("./usuario/schema/usuario.schema");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Juego', schema: juego_schema_1.JuegoSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'auth', schema: usuario_schema_1.UsuarioSchema }]),
            juego_module_1.JuegoModule,
            usuario_module_1.UsuarioModule,
            mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1/playRest_v3'),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map