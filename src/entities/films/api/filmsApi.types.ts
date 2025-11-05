import type { IFilms } from "../../../shared/types"

export interface IGetFilmsResponseType {
    page : number
    results : IFilms [] 
    total_pages : number,
    total_results : number
  }