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
exports.JuegoController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const juego_dto_1 = require("./dto/juego-dto/juego-dto");
const juego_service_1 = require("./juego.service");
let JuegoController = class JuegoController {
    constructor(juegoService) {
        this.juegoService = juegoService;
    }
    async listar(res) {
        return res.redirect('/');
    }
    async llevarForm(res, req) {
        if (req.session && req.session.usuario)
            return res.render('admin/admin_nuevo');
        else {
            res.render('public/error', { error: 'No eres administrador' });
        }
    }
    async editarJuego(res, id, req) {
        try {
            if (req.session && req.session.usuario) {
                await this.juegoService
                    .listarId(id.id)
                    .then((juego) => {
                    return res.render('admin/admin_nuevo', { juego: juego });
                })
                    .catch((error) => {
                    res.render('public/error', { error: error });
                });
            }
            else {
                res.render('public/error', { error: 'No eres administrador' });
            }
        }
        catch (error) {
            return res.render('public/error', { error: error });
        }
    }
    async buscarPorId(res, id) {
        try {
            await this.juegoService
                .listarId(id)
                .then((juego) => {
                return res.render('public/juego_ficha', { juego: juego });
            })
                .catch((error) => {
                res.render('public/error', { error: error });
            });
        }
        catch (error) {
            return res.render('public/error', { error: error });
        }
    }
    async borrarJuego(res, id) {
        await this.juegoService.borrar(id).then(() => {
            return res.render('public/error', {
                error: 'Juego borrado correctamente',
            });
        });
    }
    async actualizarJuego(id, actualizarJuego, res, req) {
        try {
            if (req.session && req.session.usuario) {
                const juego = await this.juegoService.listarId(id);
                actualizarJuego.imagen = actualizarJuego.imagen
                    ? actualizarJuego.imagen
                    : juego.imagen;
                await this.juegoService
                    .actualizar(id, actualizarJuego)
                    .then(() => {
                    return res.redirect('/juego/' + id);
                })
                    .catch((e) => {
                    res.render('public/error', { error: e });
                });
            }
            else {
                res.render('public/error', { error: 'No eres administrador' });
            }
        }
        catch (error) {
            return res.render('public/error', { error: error });
        }
    }
    async crear(crearJuegoDTO, res, req, file) {
        console.log(file, crearJuegoDTO.imagen);
        if (req.session && req.session.usuario) {
            this.juegoService
                .insertar(crearJuegoDTO)
                .then((juego) => {
                if (juego)
                    return res.redirect('/');
                else {
                    throw new Error();
                }
            })
                .catch((error) => {
                return res.render('public/error', { error: error });
            });
        }
        else {
            res.render('public/error', { error: 'No eres administrador' });
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JuegoController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)('/nuevo'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], JuegoController.prototype, "llevarForm", null);
__decorate([
    (0, common_1.Get)('/editar/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], JuegoController.prototype, "editarJuego", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], JuegoController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Post)('borrar/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], JuegoController.prototype, "borrarJuego", null);
__decorate([
    (0, common_1.Post)('/editar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], JuegoController.prototype, "actualizarJuego", null);
__decorate([
    (0, common_1.Post)('/nuevo'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imagen', {
        storage: (0, multer_1.diskStorage)({
            destination: function (req, file, cb) {
                cb(null, 'public/uploads');
            },
            filename: (req, file, cb) => {
                cb(null, Date.now() + '_' + file.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [juego_dto_1.JuegoDto, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], JuegoController.prototype, "crear", null);
JuegoController = __decorate([
    (0, common_1.Controller)('juego'),
    __metadata("design:paramtypes", [juego_service_1.JuegoService])
], JuegoController);
exports.JuegoController = JuegoController;
//# sourceMappingURL=juego.controller.js.map