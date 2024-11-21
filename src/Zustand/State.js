import { create } from "zustand";

const store = create((set) => ({
  sectionRefs: {},
  setSectionRefs: (newSection) =>
    set((state) => {
      return {
        ...state,
        sectionRefs: newSection,
      };
    }),
}));

export default store;
