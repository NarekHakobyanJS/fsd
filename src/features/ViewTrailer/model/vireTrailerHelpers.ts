import { useViewTrailerStore } from "./viewTrailerStore";

const viewAndHideTrailerModal = useViewTrailerStore.getState().viewAndHideTrailerModal

export {viewAndHideTrailerModal}