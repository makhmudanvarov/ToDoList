import { create } from "zustand";
import { uz } from '../utils/lang.js'

export const useTodoStore = create((set) => ({
    lang: uz,
    update: { edit: false, note: null },
    notes: [
        { id: 1, title: "Salom", text: "Nma gap1", date: new Date().toLocaleDateString(), },
        { id: 2, title: "Hayr", text: "Nma gap2", date: new Date().toLocaleDateString(), },
        { id: 3, title: "Tugadi", text: "Nma gap3", date: new Date().toLocaleDateString(), },
    ],
    removeNote: (id) =>
        set((state) => ({
            notes: state.notes.filter((note) => note.id !== id),
        })),
    title: "",
    text: "",
    modal: false,
    setUpdate: (data) => set({ update: data }),
    setLang: (data) => set({ lang: data }),
    setNotes: (data) => set({ notes: data }),
    setModal: (data) => set({ modal: data }),
    setTitle: (data) => set({ title: data }),
    setText: (data) => set({ text: data }),
}));
