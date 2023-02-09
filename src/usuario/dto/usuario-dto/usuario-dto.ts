import { IsNotEmpty, IsString } from 'class-validator';
export class UsuarioDto {
  @IsNotEmpty()
  @IsString()
  readonly login: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
