import { useAddFavoriteStore } from "./addFavoriteStore";


const useFavoriteFilms = () => useAddFavoriteStore((state) => state.favoriteFilms)

export {useFavoriteFilms}