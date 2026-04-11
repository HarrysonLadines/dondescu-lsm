import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8 bg-zinc-50 dark:bg-black font-sans">
      <main className="flex flex-col items-center gap-8 text-center max-w-2xl">
        <div className="text-6xl mb-4">🏷️</div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-zinc-50">
            Don Descu <span className="text-blue-600">LSM</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Bienvenido a la página principal.
          </p>
        </div>

        <Link
          href="/login"
          className="mt-6 px-6 py-3 bg-[#0b4f53] text-white rounded-md font-medium hover:bg-[#083c3e] transition-colors"
        >
          Ir al Inicio de Sesión
        </Link>
      </main>
    </div>
  );
}