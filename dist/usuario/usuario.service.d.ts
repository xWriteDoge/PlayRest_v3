import { Model } from 'mongoose';
import { UsuarioDto } from './dto/usuario-dto/usuario-dto';
import { Usuario } from './interfaces/usuario/usuario.interface';
export declare class UsuarioService {
    private readonly authModel;
    constructor(authModel: Model<Usuario>);
    listar(): Promise<Usuario[]>;
    insertar(crearUsuarioDto: UsuarioDto): Promise<Usuario>;
    login(): Promise<Usuario[]>;
}
