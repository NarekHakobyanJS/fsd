import { create, type StateCreator } from "zustand";
import type { ISearchFormStateType, ISearchFormStoreType } from "./searchFormStore.types";

const initialState : ISearchFormStateType= {
    inputText : ''
}
const searchFormStore : StateCreator<ISearchFormStoreType> = ((set) => ({
    ...initialState,
    changeInputText : (newText) => {
        set({inputText : newText})
    }
}))


const useSearchFormStore = create<ISearchFormStoreType>()(searchFormStore)

export {useSearchFormStore}