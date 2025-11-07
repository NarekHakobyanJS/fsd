import { useViewTrailerStore } from "./viewTrailerStore";

const useIsOpenAndCloseModal = () => useViewTrailerStore((state) => state.isOpenAndCloseModal)

export {useIsOpenAndCloseModal}