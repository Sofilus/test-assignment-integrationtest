import { movieSort } from "../functions";
import { IMovie } from "../models/Movie";

describe("If true, should sort Title in alphabetical order", () => {

    test("If  a > b", () => {

        let list: IMovie[] = [{
            Title: "Aladin",
            imdbID: "2",
            Type: "Action",
            Poster: "Fantasy",
            Year: "2000"
            },{
            Title: "Hunger games",
            imdbID: "1",
            Type: "Action",
            Poster: "Mockingjay",
            Year: "2012"
        }]; 
            
        let desc: boolean = true;  

        movieSort(list, desc);

        expect(list).toEqual([{
            Title: "Aladin",
            imdbID: "2",
            Type: "Action",
            Poster: "Fantasy",
            Year: "2000"
            },{
            Title: "Hunger games",
            imdbID: "1",
            Type: "Action",
            Poster: "Mockingjay",
            Year: "2012"
        }]);
    });

    test("If a < b", () => {

        let list: IMovie[] = [{
            Title: "Hunger games",
            imdbID: "1",
            Type: "Action",
            Poster: "Mockingjay",
            Year: "2012"}, 
            {
            Title: "Aladin",
            imdbID: "2",
            Type: "Action",
            Poster: "Fantasy",
            Year: "2000"
        }];

        let desc: boolean = true;  

        movieSort(list, desc);

        expect(list).toEqual([{
            Title: "Aladin",
            imdbID: "2",
            Type: "Action",
            Poster: "Fantasy",
            Year: "2000"
            },{
            Title: "Hunger games",
            imdbID: "1",
            Type: "Action",
            Poster: "Mockingjay",
            Year: "2012"
        }]);
    });

    test("If  a = b", () => {

        let list: IMovie[] = [{
            Title: "Aladin",
            imdbID: "2",
            Type: "Action",
            Poster: "Fantasy",
            Year: "2000"
            },{
            Title: "Aladin",
            imdbID: "1",
            Type: "Action",
            Poster: "Mockingjay",
            Year: "2012"
        }]; 
            
        let desc: boolean = true;  
    
        movieSort(list, desc);
    
        expect(list).toEqual([{
            Title: "Aladin",
            imdbID: "2",
            Type: "Action",
            Poster: "Fantasy",
            Year: "2000"
            },{
            Title: "Aladin",
            imdbID: "1",
            Type: "Action",
            Poster: "Mockingjay",
            Year: "2012"
        }]);
    });
});

describe("If false, should sort Title in rewersed alphabetical order", () => {

    test("If a > b", () => {
        let list: IMovie[] = [{
            Title: "Aladin",
            imdbID: "2",
            Type: "Action",
            Poster: "Fantasy",
            Year: "2000"
            },{
            Title: "Hunger games",
            imdbID: "1",
            Type: "Action",
            Poster: "Mockingjay",
            Year: "2012"
        }];

        let desc: boolean = false;  

        movieSort(list, desc);

        expect(list).toEqual([{
            Title: "Hunger games",
            imdbID: "1",
            Type: "Action",
            Poster: "Mockingjay",
            Year: "2012"}, 
            {
            Title: "Aladin",
            imdbID: "2",
            Type: "Action",
            Poster: "Fantasy",
            Year: "2000"
        }]);
    });

    test("If a < b", () => {

        let list: IMovie[] = [{
            Title: "Hunger games",
            imdbID: "1",
            Type: "Action",
            Poster: "Mockingjay",
            Year: "2012"},{
            Title: "Aladin",
            imdbID: "2",
            Type: "Action",
            Poster: "Fantasy",
            Year: "2000"
        }];

        let desc: boolean = false;  

        movieSort(list, desc);

        expect(list).toEqual([{
            Title: "Hunger games",
            imdbID: "1",
            Type: "Action",
            Poster: "Mockingjay",
            Year: "2012"}, 
            {
            Title: "Aladin",
            imdbID: "2",
            Type: "Action",
            Poster: "Fantasy",
            Year: "2000"
        }]);
    });

    test("If a = b", () => {

        let list: IMovie[] = [{
            Title: "Aladin",
            imdbID: "2",
            Type: "Action",
            Poster: "Fantasy",
            Year: "2000"
            },{
            Title: "Aladin",
            imdbID: "1",
            Type: "Action",
            Poster: "Mockingjay",
            Year: "2012"
        }];

        let desc: boolean = false;  

        movieSort(list, desc);

        expect(list).toEqual([{
            Title: "Aladin",
            imdbID: "2",
            Type: "Action",
            Poster: "Fantasy",
            Year: "2000"
            },{
            Title: "Aladin",
            imdbID: "1",
            Type: "Action",
            Poster: "Mockingjay",
            Year: "2012"
        }]);
    });
});