# 📚 Diagrama ER

Este es el modelo Entidad-Relación (ER) que define la estructura de datos de Don Descu.

```mermaid
erDiagram
    Usuario ||--o{ Colaboracion : "realiza"
    Usuario ||--o{ Ganador : "obtiene"
    Usuario ||--o{ Logro : "gana"
    
    Categoria ||--o{ Producto : "contiene"
    
    Producto ||--o{ ProductoNegocio : "disponible_en"
    Negocio ||--o{ ProductoNegocio : "vende"
    
    ProductoNegocio ||--o{ Colaboracion : "recibe_precios"

    Usuario {
        Int id_usuario PK
        String nombre
        String email
        String ubicacion
        Int puntos
        String contrasena
        Rol rol
    }

    Categoria {
        Int id_categoria PK
        String nombre
    }

    Producto {
        Int id_producto PK
        String nombre
        Float precio_base
        Int id_categoria FK
        String imagenUrl
    }

    Negocio {
        Int id_negocio PK
        String nombre
        String direccion
        Float lat
        Float lng
        String imagenUrl
    }

    ProductoNegocio {
        Int id_producto PK, FK
        Int id_negocio PK, FK
    }

    Colaboracion {
        Int id_colaboracion PK
        DateTime fecha_registro
        Float precio
        String descripcion
        EstadoColaboracion estado
        Int id_usuario FK
        Int id_producto FK
        Int id_negocio FK
    }

    Ganador {
        Int id_ganador PK
        Int mes
        Int anio
        Int puesto
        Int puntosLogrados
    }

    Logro {
        Int id_logro PK
        String nombre
        DateTime fecha
    }
```

## 📋 Tablas

### Usuario
Almacena la información de los vecinos de Libertador. Incluye el sistema de puntos y el rol (`USER` / `ADMIN`) para la moderación.

### Producto
Catálogo general de artículos. No tiene un precio fijo, ya que este varía según el negocio.

### Categoria
Clasificación de los productos (Almacén, Limpieza, Verdulería) para facilitar las búsquedas.

### Negocio
Registra los comercios locales. Incluye coordenadas `lat` y `lng` para mostrar la ubicación exacta en el mapa.

### ProductoNegocio
Tabla intermedia que vincula productos con locales. Representa la existencia de un producto específico en un comercio determinado.

### Colaboracion
La tabla de actividad. Registra cada vez que un usuario reporta un precio. Requiere aprobación (`estado`) para sumar puntos al usuario.

### Ganador
Historial del ranking mensual. Guarda quiénes fueron los usuarios destacados de cada mes.

### Logro
Medallas otorgadas a los usuarios por hitos específicos (ej. "Primer aporte", "Cazador de ofertas").