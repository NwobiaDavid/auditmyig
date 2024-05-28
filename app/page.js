import Image from "next/image";

export default function Home() {
  return (
   <main className="px-56 py-32 h-[80dvh] bg-black text-white " >
   <div className="flex justify-center h-full items-center " >
    <div className="w-[55%] h-full " >
    <h2 className="text-7xl font-bold  ">hello world</h2>
    <p>
      some sub headers
    </p>

    </div>

    <div className="w-[45%] h-full " >
      <div>
        image
      </div>
    </div>
   </div>
   </main>
  );
}
