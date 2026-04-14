export class CreateProductoDto {
  nombre: string;
  precio_base?: number; // el precio base del producto se puede calcular en base al promedio de las colaboraciones existentes. 
  id_categoria: number;
  imagenUrl?: string;
}
