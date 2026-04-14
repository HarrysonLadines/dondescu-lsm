export class CreateColaboracionDto {
  id_producto: number;
  id_negocio: number;
  id_usuario: string;
  precio: number;
  descripcion: string;
  estado : 'PENDIENTE'|'APROBADO'|'RECHAZADO';
}
