"use client";
import { useColorStore } from "@/store/ColorStore";

export default function ColorInput({
    id,
    value,
}: {
    id: number;
    value: string;
}) {
    const updateColorValue = useColorStore((state) => state.updateColorValue);
    const updatePickedColorId = useColorStore(
        (state) => state.updatePickedColorId
    );
    const pickedColorId = useColorStore((state) => state.pickedColorId);

    return (
      <input
        onClick={() => updatePickedColorId(id)}
        onChange={(e) => updateColorValue(id, e.target.value)}
        className="w-[60px] h-[60px] bg-transparent rounded-md cursor-pointer d-block   [&:not(:last-child):mr-4]"
        style={{ border: id === pickedColorId ? "2px inset white" : "none" }}
        type="color"
        value={value}
      />
    );
}
