import { useSearchFormStore } from "./searchFormStore";

const useInputText = () => useSearchFormStore((state) => state.inputText)
const useIsOpenResult = () => useSearchFormStore((state) => state.isOpenResult)

export {useInputText, useIsOpenResult}