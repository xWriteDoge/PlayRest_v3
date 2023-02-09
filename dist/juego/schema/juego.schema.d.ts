import * as mongoose from 'mongoose';
export declare const JuegoSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nombre: string;
    descripcion: string;
    edad: number;
    numJugadores: number;
    precio: number;
    edicion: {
        nombre?: string;
        anyo?: number;
    }[];
    tipo?: {
        enum: unknown[] | unknown[] | unknown[] | unknown[] | unknown[] | unknown[];
    };
    imagen?: string;
}>;
