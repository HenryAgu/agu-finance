export default function Home() {
  return (
    <main className="bg-home-background-image bg-no-repeat bg-center bg-cover h-screen w-full">
      <div className="p-6 flex items-center justify-between">
        <div>
          <p className="font-bold text-xl">Agu-finance</p>
        </div>
        <div>
          <button className="bg-primaryButton px-12 py-2 font-medium rounded-md shadow-sm lg:text-base">Login</button>
        </div>
      </div>
      <div className="flex flex-col gap-y-10 justify-center items-center mt-40">
        <h1 className="text-black text-center text-5xl w-11/12 font-bold lg:text-7xl lg:tracking-widest lg:leading-none">
          Best finance for <br /> Africa's Professionals
        </h1>
        <button className="bg-secondaryButton px-16 py-3 font-medium rounded-md shadow-sm lg:text-lg">Login</button>
      </div>
    </main>
  );
}
