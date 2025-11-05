import { useAddFavoriteStore } from "./addFavoriteStore";

const addAndRemoveFavorite = useAddFavoriteStore.getState().addAndRemoveFavorite

export {addAndRemoveFavorite}