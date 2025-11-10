import { useSearchFormStore } from "./searchFormStore";

const changeInputText = useSearchFormStore.getState().changeInputText

export {changeInputText}