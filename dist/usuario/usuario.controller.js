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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_dto_1 = require("./dto/usuario-dto/usuario-dto");
const usuario_service_1 = require("./usuario.service");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async listar(res) {
        return res.redirect('/auth/login');
    }
    async llevarForm(res, req) {
        if (!(req.session && req.session.usuario))
            return res.render('public/iniciarSesion');
        else
            return res.redirect('/');
    }
    async llevarFormRegister(res, req) {
        if (!(req.session && req.session.usuario))
            return res.render('public/register');
        else
            return res.redirect('/');
    }
    async cerrarSession(res, req) {
        try {
            req.session.destroy();
            res.redirect('/');
        }
        catch (e) {
            res.render('public/error', { error: 'Error en la aplicación: ' + e });
        }
    }
    async crear(crearUsuarioDto, res, req) {
        this.usuarioService
            .login()
            .then((users) => {
            users.filter((user) => {
                if (user.login === crearUsuarioDto.login &&
                    user.password === crearUsuarioDto.password) {
                    req.session.usuario = crearUsuarioDto;
                    return res.redirect('/');
                }
            });
        })
            .catch((e) => {
            return res.render('public/iniciarSesion', { error: e });
        });
    }
    async crearUser(crearUsuarioDto, res) {
        this.usuarioService
            .insertar(crearUsuarioDto)
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
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)('/login'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "llevarForm", null);
__decorate([
    (0, common_1.Get)('/register'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "llevarFormRegister", null);
__decorate([
    (0, common_1.Get)('logout'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "cerrarSession", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_dto_1.UsuarioDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "crear", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_dto_1.UsuarioDto, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "crearUser", null);
UsuarioController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map