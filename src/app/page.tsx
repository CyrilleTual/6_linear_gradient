import Gradient from "@/components/Gradient";
import InteractivePanel from "@/components/InteractivePanel";

export default function Home() {
  return (
    <main>
      <div className="relative flex text-slate-100 max-w-2xl mx-auto p-4 border mt-20 border-slate-400 rounded-sm">
        <div className="w-1/2 p-4 pr-8">
          <h1 className="text-center text-xl">gradient generator</h1>
          <p className="text-center mb-6">Bring style to your app</p>
          <p className="mb-1">Colors : min 2, max 5</p>
          <InteractivePanel/>
        </div>
        {/* window for visualisation of the gradient */}
        <Gradient/>
      </div>
    </main>
  );
}
