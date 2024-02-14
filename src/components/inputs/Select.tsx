"use client";
import { useColorStore } from "@/store/ColorStore";
import { useEffect, useState } from "react";

export default function Select() {
  const colors = useColorStore((state) => state.colors);
  const picked = useColorStore((state) => state.pickedColorId);
  const updatePickedColorId = useColorStore(
    (state) => state.updatePickedColorId
  );

const [pickedColorId, setPickedColorId] = useState(picked);

useEffect(() => {
    setPickedColorId(picked);
}, [picked]);

const handleChangeColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.target.value &&
        updatePickedColorId(
            colors.find((color) => color.color === e.target.value)?.id || pickedColorId  // to avoid typescript error
        );
}

  return (
    <>
      {colors.length > 0 && picked &&(
        <>
          <select
            className="bg-gray-900 cursor-pointer py-1 px-2 mb-1 mt-2 border border-gray-700 outline-none rounded-md focus:border-gray-700"
            style={{
              backgroundColor: `${
                colors.find((color) => color.id === pickedColorId)?.color
              }`,
              textShadow:"1px 1px 0px black , 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black",
              letterSpacing: "0.9px",
            }}
            onChange={(e) => { handleChangeColor(e); }
        } 
          >
            {colors.map((color) => (
              <option
                key={color.id}
                value={color.color}
                // style={{
                //   backgroundColor: `${color.color}`,
                // }}
                style={{ backgroundColor: '#3f6ab5' }}
              > Couleur n° {colors.indexOf(color) + 1} - {" "}   
                {color.color} 
                
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );
}
