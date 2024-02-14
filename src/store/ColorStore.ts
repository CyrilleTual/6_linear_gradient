import { create } from "zustand";
import { combine } from "zustand/middleware"; // import the middleware to infer the type of the store and the actions
import { persist } from "zustand/middleware";

/**
 * A custom hook that provides state management for colors in the application.
 * It allows updating color values, picking a color, adding a new color, and removing a color.
 */
export const useColorStore = create(
  persist(
    combine(
      {
        colors: [
          {
            id: 1,
            color: "#FF0000",
            position: 33,
          },
          {
            id: 2,
            color: "#00FF00",
            position: 66,
          },
        ],
        pickedColorId: 1,
        angle: 60,
      },

      (set) => ({
        // update the color value
        updateColorValue: (id: number, newcolor: string) =>
          set((state) => ({
            colors: state.colors.map((color) => {
              if (color.id === id) {
                state.pickedColorId = id;
                return { ...color, color: newcolor };
              }
              return color;
            }),
          })),

        // update picked color
        updatePickedColorId: (id: number) =>
          set((state) => ({
            pickedColorId: id,
          })),

        // add a new color if there are less than 5 colors
        addColor: (): void => {
          if (useColorStore.getState().colors.length < 5) {
            /// get the colors from the state
            const colors = useColorStore.getState().colors;
            const lastPosition = colors[colors.length - 1].position;
            const newPosition =
              lastPosition + 10 > 100 ? 100 : lastPosition + 10;

            set((state) => ({
              colors: [
                ...state.colors,
                {
                  id: new Date().getTime(),
                  color: randomHexColorCode(),
                  position: newPosition,
                },
              ],
            }));
          }
        },

        // remove a color if there are more than 2 colors
        removeColor: (): void => {
          if (useColorStore.getState().colors.length > 2) {
            const state = useColorStore.getState();
            const newArray = state.colors.filter(
              (color) => color.id !== state.pickedColorId
            );
            set(() => ({
              colors: newArray,
              pickedColorId: newArray[0].id, // pick the first color
            }));
          }
        },

        // update the global angle
        updateAngle: (angle: number) =>
          set((state) => ({
            angle,
          })),

        //update the position of the color
        updateColorPosition: (id: number, position: number) =>
          set((state) => ({
            colors: state.colors.map((color) => {
              if (color.id === id) {
                return { ...color, position: position };
              }
              return color;
            }),
          })),

          // reset  to the default
        resetDefault: () =>{
          set(() => ({
            colors: [
              {
                id: 1,
                color: "#FF0000",
                position: 33,
              },
              {
                id: 2,
                color: "#00FF00",
                position: 66,
              },
            ],
            pickedColorId: 1,
            angle: 60,
          }))
          
        }
      })
    ),
    {
      name: "gradient-colors",
    }
  )
);





// generate a random hex color code for the new color ;-)
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};
