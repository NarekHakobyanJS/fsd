import type { IFilms } from "../../../shared/types";

interface IAddFavoriteActionType {
    addAndRemoveFavorite : (film : IFilms) => void
}

interface IAddFavoriteStateType {
    favoriteFilms : IFilms []
}

interface IAddFavoriteStoreType extends IAddFavoriteActionType, IAddFavoriteStateType {

}

export type {IAddFavoriteStoreType, IAddFavoriteStateType, IAddFavoriteActionType}