import { create, type StateCreator } from "zustand";
import type { ISearchFormStateType, ISearchFormStoreType } from "./searchFormStore.types";

const initialState : ISearchFormStateType= {
    inputText : '',
    isOpenResult : false
}
const searchFormStore : StateCreator<ISearchFormStoreType> = ((set) => ({
    ...initialState,
    changeInputText : (newText) => {
        set({inputText : newText})
    },
    openAndCloseResult : (newValue) => {
        set({isOpenResult : newValue})
    }
}))


const useSearchFormStore = create<ISearchFormStoreType>()(searchFormStore)

export {useSearchFormStore}