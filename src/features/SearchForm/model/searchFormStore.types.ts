interface ISearchFormStateType {
    inputText : string
}

interface ISearchFormActionType {
    changeInputText : (newText : string) => void
}

interface ISearchFormStoreType extends ISearchFormStateType, ISearchFormActionType{
    
}

export type {ISearchFormStoreType, ISearchFormStateType, ISearchFormActionType}