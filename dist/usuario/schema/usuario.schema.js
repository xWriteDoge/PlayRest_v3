"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSchema = void 0;
const mongoose = require("mongoose");
exports.UsuarioSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        minlenght: 5,
        unique: true,
    },
    password: {
        type: String,
        minlenght: 8,
    },
});
//# sourceMappingURL=usuario.schema.js.map