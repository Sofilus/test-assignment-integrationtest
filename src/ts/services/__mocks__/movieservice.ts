import { IMovie } from "../../models/Movie";

export const movie: IMovie[]  = [{ Title: "The hunger games", imdbID: "1", Type: "Movie", Poster: "Mockingjay", Year: "2012"}]

export async function getMovie(searchText:string): Promise<IMovie[]> {
    return new Promise((resolve, reject) => {
        if(searchText === ''){
            resolve([])
        }

        if (searchText !== 'error'){
            resolve(movie);
        } else {
            reject([])
        }
    })
};