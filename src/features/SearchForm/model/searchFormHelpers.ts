import { useSearchFormStore } from "./searchFormStore";

const changeInputText = useSearchFormStore.getState().changeInputText
const openAndCloseResult = useSearchFormStore.getState().openAndCloseResult

export {changeInputText, openAndCloseResult}