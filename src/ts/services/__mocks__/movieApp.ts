import { IMovie } from "../../models/Movie";

export async function getMovie(searchText:string): Promise<IMovie[]> {
    return new Promise((resolve) => {
        resolve([{
            Title: "The hunger games",
            imdbID: "1",
            Type: "Action",
            Poster: "Mockingjay",
            Year: "2012"
        }]);
    })
}