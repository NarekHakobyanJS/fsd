import { create, type StateCreator } from "zustand";
import type { IViewTrailerStateType, IViewTrailerStoreType } from "./viewTrailerStore.types";

const initialState : IViewTrailerStateType = {
    isOpenAndCloseModal : false
}

const viewTrailerStore : StateCreator<IViewTrailerStoreType>= ((set) => ({
    ...initialState,
    viewAndHideTrailerModal : (newValue) => {
        set({isOpenAndCloseModal : newValue})
    }
}))


export const useViewTrailerStore = create<IViewTrailerStoreType>()(viewTrailerStore)
