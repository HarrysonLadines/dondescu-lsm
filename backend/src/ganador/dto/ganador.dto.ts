export class GanadorDto { //no incluimos un create como tal, ya que deberia crearse automaticamente en la bd al evaluar los datos mes a mes
  id_ganador: number;
  id_usuario: string;
  mes: number;
  anio: number;
  puesto: number;
  puntosLogrados: number;
}
