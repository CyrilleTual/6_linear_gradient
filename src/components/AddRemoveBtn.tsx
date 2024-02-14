import { useColorStore } from "@/store/ColorStore";

/**
 * A button component for adding or removing colors.
 *
 * @param action - The action to perform when the button is clicked. Can be "add" or "remove".
 * @param text - The text to display on the button.
 */
export default function AddRemoveBtn({
    action,
    text,
}: {
    action: string;
    text: string;
}) {
    const addColor = useColorStore((state) => state.addColor);
    const removeColor = useColorStore((state) => state.removeColor);

    const handleClick = (): void => {
        if (action === "add") {
            addColor();
        } else {
            removeColor();
        }
    };

    return (
        <button
            className="mr-1 border border-slate-400 rounded-sm min-w-[40px] "
            onClick={() => handleClick()}
        >
            {text}
        </button>
    );
}
