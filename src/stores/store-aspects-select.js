import { Vector3 } from "three";
import { create } from "zustand";

export const useAspectsStore = create((set) => ({
  aspect: {
    name: "NOT_TYPE_SELECTED",
    positionCamera: new Vector3(0, 2, 4),
  },

  setAspect: (aspect) =>
    set({
      aspect: aspect,
    }),
}));