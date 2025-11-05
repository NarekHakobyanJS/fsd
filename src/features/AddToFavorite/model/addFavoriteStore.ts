import { create, type StateCreator } from "zustand";
import type { IAddFavoriteStateType, IAddFavoriteStoreType } from "./addFavoriteStore.types";
import { persist } from "zustand/middleware";

const initialState : IAddFavoriteStateType = {
    favoriteFilms : []
}

const addFavoriteStore : StateCreator<IAddFavoriteStoreType> = ((set, get) => ({
    ...initialState,
    addAndRemoveFavorite : (film) => {
        const {favoriteFilms} = get()
        let bool = false;
        favoriteFilms.forEach((favorite) => {
            
            if(favorite.id === film.id){
                bool = true 
                set({favoriteFilms : favoriteFilms.filter((f) => f.id !== film.id)})
            }
        })

        if(!bool){
            set({favoriteFilms : [...favoriteFilms, film]})
        }

    }
}))


export const useAddFavoriteStore = create<IAddFavoriteStoreType>()(
    persist(
        addFavoriteStore,
        {name : 'favorite-films'}
    )
)