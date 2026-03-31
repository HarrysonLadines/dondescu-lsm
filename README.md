# 🏷️ Don Descu LSM
Comparador de precios y ofertas colaborativo para Libertador San Martín.

---


**Don Descu LSM** nace para empoderar a los vecinos de Libertador San Martín. A través del crowdsourcing, los propios usuarios notifican precios bajos, permitiendo que toda la comunidad encuentre la opción más barata en tiempo real.

---

## Funcionalidades Principales

### 🔍 Inteligencia de Búsqueda
* **Buscador con Autocompletado:** Encuentra productos específicos al instante.
* **Filtros de Proximidad:** Ajusta el radio de búsqueda (500m, 1km, 5km) para encontrar ofertas a la vuelta de tu casa.
* **Mapa Interactivo:** Visualiza los comercios con mejores descuentos en el mapa local.

### 📦 Gestión de Ahorro
* **Ficha Dinámica de Producto:**
    * **Ranking de Precios:** Listado ordenado de menor a mayor.
    * **Identidad Local:** Logo y nombre de cada comercio de LSM.
    * **Cálculo de Distancia:** Distancia real en metros desde tu ubicación actual.
* **Carrito de Ahorro:** Planifica tu compra y conoce exactamente a dónde ir antes de salir.
* **Alertas Inteligentes:** Notificaciones automáticas cuando un producto de tu interés baja de precio.

### 🏆 Sistema de Gamificación
Fomentamos la colaboración mediante un sistema de puntos y recompensas:
* **+10 pts:** Por subir un precio nuevo.
* **+20 pts:** Por reportar con foto del ticket/góndola (verificación).
* **+5 pts:** Por confirmar la validez de un precio de otro vecino.

>**Ciclos de Premiación:** Cada 15 días (domingos a medianoche), un script en backend cierra el ranking, premia a los 3 mejores contribuyentes y reinicia los contadores para un nuevo ciclo. (También añade a los ganadores a un Historial de Ganadores para dar transparencia de los premios entregados)

---

## 🛠️ Stack 
- **Frontend**: Angular 
- **Backend**: NestJS
- **Database**: PostgreSQL (Supabase) - Prisma ORM
- **Storage**: Supabase Storage (Fotos de productos/tickets)

---
