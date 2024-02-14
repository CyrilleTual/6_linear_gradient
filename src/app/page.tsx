import Gradient from "@/components/Gradient";
import InteractivePanel from "@/components/InteractivePanel";

export default function Home() {
  return (
    <main>
      <div className="relative flex  flex-wrap flex-row text-slate-100 max-w-2xl mx-auto p-4 border mt-20 border-slate-400 rounded-sm">
        <h1 className="mb-3 text-center text-xl w-full" >
          Générateur de CSS - Dégradé Linéaire
        </h1>
        <div className="w-1/2 p-4 pr-8">
          <p className="text-center mb-3">CSS générator - linear gradient</p>
          <p className="mb-1">Couleurs : min. 2, max 5</p>
          <InteractivePanel />
        </div>
        {/* window for visualisation of the gradient */}
        <Gradient />
      </div>
    </main>
  );
}
