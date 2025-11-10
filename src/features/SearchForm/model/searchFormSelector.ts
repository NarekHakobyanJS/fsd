import { useSearchFormStore } from "./searchFormStore";

const useInputText = () => useSearchFormStore((state) => state.inputText)

export {useInputText}