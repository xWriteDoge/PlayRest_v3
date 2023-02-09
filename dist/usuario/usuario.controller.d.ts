import { UsuarioDto } from './dto/usuario-dto/usuario-dto';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    listar(res: any): Promise<any>;
    llevarForm(res: any, req: any): Promise<any>;
    llevarFormRegister(res: any, req: any): Promise<any>;
    cerrarSession(res: any, req: any): Promise<void>;
    crear(crearUsuarioDto: UsuarioDto, res: any, req: any): Promise<void>;
    crearUser(crearUsuarioDto: UsuarioDto, res: any): Promise<void>;
}
