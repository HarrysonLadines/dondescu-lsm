export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <main className="flex flex-col items-center gap-8 text-center sm:text-left max-w-2xl">
        <div className="text-6xl mb-4">🏷️</div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-zinc-50">
            Don Descu <span className="text-blue-600">LSM</span>
          </h1>
        </div>
      </main>
    </div>
  );
}