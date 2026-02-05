import { create } from "zustand"
import { uz } from '../utils/lang.js'

const getNotes = () => {
    let local = localStorage.getItem('notes')
    if (local) {
        return JSON.parse(local)
    } else {
        return []
    }
}

export const useTodoStore = create((set) => ({
    lang: uz,
    update: { edit: false, note: null },
    notes: getNotes(),
    removeNote: (id) =>
        set((state) => ({
            notes: state.notes.filter((note) => note.id !== id),
        })),
    title: "",
    text: "",
    modal: false,
    setUpdate: (data) => set({ update: data }),
    setLang: (data) => set({ lang: data }),
    setNotes: (data) => set(() => {
        localStorage.setItem('notes', JSON.stringify(data))
        return { notes: data }
    }),
    setModal: (data) => set({ modal: data }),
    setTitle: (data) => set({ title: data }),
    setText: (data) => set({ text: data }),
}));