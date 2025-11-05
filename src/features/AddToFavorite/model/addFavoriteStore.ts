import { create, type StateCreator } from "zustand";
import type { IAddFavoriteStateType, IAddFavoriteStoreType } from "./addFavoriteStore.types";

const initialState : IAddFavoriteStateType = {
    favoriteFilms : []
}

const addFavoriteStore : StateCreator<IAddFavoriteStoreType> = ((set) => ({
    ...initialState,
    addAndRemoveFavorite : (film) => {
        console.log(film)
    }
}))


export const useAddFavoriteStore = create<IAddFavoriteStoreType>()(addFavoriteStore)