interface ISearchFormStateType {
    inputText : string,
    isOpenResult : boolean
}

interface ISearchFormActionType {
    changeInputText : (newText : string) => void
    openAndCloseResult : (newValue : boolean) => void
}

interface ISearchFormStoreType extends ISearchFormStateType, ISearchFormActionType{
    
}

export type {ISearchFormStoreType, ISearchFormStateType, ISearchFormActionType}