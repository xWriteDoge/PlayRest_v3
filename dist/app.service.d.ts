import { Model } from 'mongoose';
import { Juego } from './juego/interfaces/juego/juego.interface';
export declare class AppService {
    private readonly contactoModel;
    constructor(contactoModel: Model<Juego>);
    listarBuscar(nombre: string): Promise<Juego[]>;
    listar(): Promise<Juego[]>;
}
