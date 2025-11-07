
interface IViewTrailerActionType {
    viewAndHideTrailerModal : (newValue : boolean) => void
}

interface IViewTrailerStateType {
    isOpenAndCloseModal : boolean
}

interface IViewTrailerStoreType extends IViewTrailerActionType, IViewTrailerStateType {

}

export type {IViewTrailerStoreType, IViewTrailerActionType, IViewTrailerStateType}