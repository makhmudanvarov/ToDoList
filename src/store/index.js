import {create} from 'zustand'

export const useTodoStore = create((set) => ({
    modal: false,
    setModal:(data) => set({modal: data})
}))

