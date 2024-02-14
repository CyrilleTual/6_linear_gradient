"use client";
import { useColorStore } from "@/store/ColorStore";
import { useState , useEffect} from "react";

export default function Gradient() {
  const colors = useColorStore((state) => state.colors);
  const angle = useColorStore((state) => state.angle);

  const [cssCode, setCssCode] = useState("");

  useEffect(() => {
    setCssCode(
      `linear-gradient(${angle}deg, ${colors
        .map((color) => color.color + " " + color.position + "%")
        .join(", ")})`
    );
  }, [colors, angle]);

  return (
    <div
      className="w-1/2 border-4 border-slate-300"
      style={{ background: `${cssCode}`}}
   
    ></div>
  );
}