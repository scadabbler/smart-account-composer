import { create } from 'zustand'

// biome-ignore lint/suspicious/noEmptyInterface: <explanation>
interface SignerStore {}

export const useSignerStore = create<SignerStore>((set) => ({}))
