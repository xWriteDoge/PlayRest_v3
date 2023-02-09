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
exports.JuegoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let JuegoService = class JuegoService {
    constructor(juegoModel) {
        this.juegoModel = juegoModel;
    }
    async listar() {
        return await this.juegoModel.find().exec();
    }
    async listarId(id) {
        return await this.juegoModel.findById(id).exec();
    }
    async insertar(crearJuegoDto) {
        const nuevoJuego = new this.juegoModel(crearJuegoDto);
        return await nuevoJuego.save();
    }
    async actualizar(id, actualizarJuegoDto) {
        return await this.juegoModel
            .findByIdAndUpdate(id, {
            $set: {
                nombre: actualizarJuegoDto.nombre,
                descripcion: actualizarJuegoDto.descripcion,
                edad: actualizarJuegoDto.edad,
                numJugadores: actualizarJuegoDto.numJugadores,
                tipo: actualizarJuegoDto.tipo,
                precio: actualizarJuegoDto.precio,
                imagen: actualizarJuegoDto.imagen,
                edicion: actualizarJuegoDto.edicion,
            },
        }, { new: true, runValidators: true })
            .exec();
    }
    async borrar(id) {
        return await this.juegoModel.findByIdAndRemove(id).exec();
    }
};
JuegoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Juego')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], JuegoService);
exports.JuegoService = JuegoService;
//# sourceMappingURL=juego.service.js.map