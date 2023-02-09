"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuegoModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const juego_controller_1 = require("./juego.controller");
const juego_service_1 = require("./juego.service");
const juego_schema_1 = require("./schema/juego.schema");
let JuegoModule = class JuegoModule {
};
JuegoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Juego', schema: juego_schema_1.JuegoSchema }]),
        ],
        controllers: [juego_controller_1.JuegoController],
        providers: [juego_service_1.JuegoService],
        exports: [juego_service_1.JuegoService],
    })
], JuegoModule);
exports.JuegoModule = JuegoModule;
//# sourceMappingURL=juego.module.js.map