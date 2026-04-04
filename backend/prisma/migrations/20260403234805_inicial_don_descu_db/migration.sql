-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "EstadoColaboracion" AS ENUM ('PENDIENTE', 'APROBADO', 'RECHAZADO');

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ubicacion" TEXT,
    "puntos" INTEGER NOT NULL DEFAULT 0,
    "contrasena" TEXT NOT NULL,
    "rol" "Rol" NOT NULL DEFAULT 'USER',

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id_categoria" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id_producto" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio_base" DOUBLE PRECISION,
    "id_categoria" INTEGER NOT NULL,
    "imagenUrl" TEXT,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "Negocio" (
    "id_negocio" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "imagenUrl" TEXT,

    CONSTRAINT "Negocio_pkey" PRIMARY KEY ("id_negocio")
);

-- CreateTable
CREATE TABLE "ProductoNegocio" (
    "id_producto" INTEGER NOT NULL,
    "id_negocio" INTEGER NOT NULL,

    CONSTRAINT "ProductoNegocio_pkey" PRIMARY KEY ("id_producto","id_negocio")
);

-- CreateTable
CREATE TABLE "Colaboracion" (
    "id_colaboracion" SERIAL NOT NULL,
    "fecha_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "precio" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT,
    "estado" "EstadoColaboracion" NOT NULL DEFAULT 'PENDIENTE',
    "id_usuario" INTEGER NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "id_negocio" INTEGER NOT NULL,

    CONSTRAINT "Colaboracion_pkey" PRIMARY KEY ("id_colaboracion")
);

-- CreateTable
CREATE TABLE "Ganador" (
    "id_ganador" SERIAL NOT NULL,
    "mes" INTEGER NOT NULL,
    "anio" INTEGER NOT NULL,
    "puesto" INTEGER NOT NULL,
    "puntosLogrados" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Ganador_pkey" PRIMARY KEY ("id_ganador")
);

-- CreateTable
CREATE TABLE "Logro" (
    "id_logro" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Logro_pkey" PRIMARY KEY ("id_logro")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Ganador_mes_anio_puesto_key" ON "Ganador"("mes", "anio", "puesto");

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoNegocio" ADD CONSTRAINT "ProductoNegocio_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Producto"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoNegocio" ADD CONSTRAINT "ProductoNegocio_id_negocio_fkey" FOREIGN KEY ("id_negocio") REFERENCES "Negocio"("id_negocio") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Colaboracion" ADD CONSTRAINT "Colaboracion_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Colaboracion" ADD CONSTRAINT "Colaboracion_id_producto_id_negocio_fkey" FOREIGN KEY ("id_producto", "id_negocio") REFERENCES "ProductoNegocio"("id_producto", "id_negocio") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ganador" ADD CONSTRAINT "Ganador_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logro" ADD CONSTRAINT "Logro_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
