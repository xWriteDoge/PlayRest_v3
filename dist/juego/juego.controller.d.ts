/// <reference types="multer" />
import { JuegoDto } from './dto/juego-dto/juego-dto';
import { Juego } from './interfaces/juego/juego.interface';
import { JuegoService } from './juego.service';
export declare class JuegoController {
    private readonly juegoService;
    constructor(juegoService: JuegoService);
    listar(res: any): Promise<any>;
    llevarForm(res: any, req: any): Promise<any>;
    editarJuego(res: any, id: any, req: any): Promise<any>;
    buscarPorId(res: any, id: any): Promise<any>;
    borrarJuego(res: any, id: any): Promise<void>;
    actualizarJuego(id: string, actualizarJuego: Juego, res: any, req: any): Promise<any>;
    crear(crearJuegoDTO: JuegoDto, res: any, req: any, file: Express.Multer.File): Promise<void>;
}
