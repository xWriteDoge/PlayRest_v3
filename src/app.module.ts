import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JuegoModule } from './juego/juego.module';
import { UsuarioModule } from './usuario/usuario.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JuegoSchema } from './juego/schema/juego.schema';
import { UsuarioSchema } from './usuario/schema/usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Juego', schema: JuegoSchema }]),
    MongooseModule.forFeature([{ name: 'auth', schema: UsuarioSchema }]),
    JuegoModule,
    UsuarioModule,
    MongooseModule.forRoot('mongodb://mymongodb/playRest_v3'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
