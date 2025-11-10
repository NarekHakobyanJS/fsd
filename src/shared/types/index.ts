interface IGenre {
    name : string,
    id : number
}


export interface IFilms {
    adult : boolean,
    backdrop_path : string,
    genre_ids : number[]
    id : number
    original_language : string
    original_title : string 
    overview : string
    popularity : number
    poster_path : string 
    release_date : string
    title : string
    video : boolean
    vote_average : number
    vote_count : number
}


interface IGetFilmsResponseType {
    page : number
    results : IFilms [] 
    total_pages : number,
    total_results : number
  }

export type {IGenre, IGetFilmsResponseType}