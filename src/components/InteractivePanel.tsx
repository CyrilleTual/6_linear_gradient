"use client";
import React from "react";
import { useColorStore } from "@/store/ColorStore"; // import the store
import ColorInput from "./inputs/ColorInput";
import AddRemoveBtn from "./AddRemoveBtn";
import Select from "./inputs/Select";
import DisplayModal from "./DisplayModal";
import ResetBtn from "./ResetBtn";


export default function InteractivePanel() {
  const colors = useColorStore((state) => state.colors);
  const pickedColorId = useColorStore((state) => state.pickedColorId);
  const angle = useColorStore((state) => state.angle);
  const updateAngle = useColorStore((state) => state.updateAngle);
  const updateColorPosition = useColorStore(
    (state) => state.updateColorPosition
  );

  return (
    <>
      <div className="flex mb-2">
        {colors.map((color) => (
          <ColorInput key={color.id} id={color.id} value={color.color} />
        ))}
      </div>
      <div className="mb-5">
        <p>
          Ajout / Retrait :{" "}
          <span>
            <AddRemoveBtn action="add" text="+" />
            <AddRemoveBtn action="remove" text="-" />
          </span>
        </p>
      </div>
      <p>Selection couleur active: </p>
      {/* select active color from existings colors */}
      <div className="mb-4">
        <Select />
      </div>
      {/* manage position of the selected color */}
      <label>Position 100% de la couleur active:</label>
      <input
        type="range"
        className="w-full h-1 mb-6 bg-gray-200 rounded-lg cursor-pointer"
        min="0"
        max="100"
        value={colors.find((color) => color.id === pickedColorId)?.position}
        onChange={(e) => updateColorPosition(pickedColorId, +e.target.value)}
      />

      {/* manage global angle */}
      <label>Inclinaison</label>
      <input
        className="w-full h-1 mb-10 bg-gray-200 rounded-lg cursor-pointer"
        type="range"
        min="0"
        max="360"
        value={angle}
        onChange={(e) => updateAngle(+e.target.value)}
      />
      {/* button to get the css code */}
      <div className="flex justify-between items-center">
        <ResetBtn />
        <DisplayModal />
      </div>
    </>
  );
}
