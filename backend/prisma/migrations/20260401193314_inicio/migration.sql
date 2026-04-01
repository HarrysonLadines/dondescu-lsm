-- CreateTable
CREATE TABLE "Producto" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT,
    "imagenUrl" TEXT,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);
