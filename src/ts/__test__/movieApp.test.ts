/**
 *@jest-environment jsdom
 */

import * as movieApp from "../movieApp";
import { IMovie } from "../models/Movie";
import * as movieService from "../services/movieservice";

beforeEach(() => {
  document.body.innerHTML = "";
});

test("Test function init, Should call function handleSubmit if searchfield are submited", () => {

    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form>`;

    let spyOnHandleSubmit = jest.spyOn(movieApp, "handleSubmit").mockReturnValue(new Promise<void>((resolve) =>
    resolve()
    ));
    
    movieApp.init();

    let searchForm =  document.querySelector("form") as HTMLFormElement;
    searchForm.submit();
   
    expect(spyOnHandleSubmit).toHaveBeenCalledTimes(1);
    spyOnHandleSubmit.mockRestore();
});

test("Test function displayNoResult, Should add text to div", () => {

  document.body.innerHTML = `<div id="movie-container"></div>`;

  let container =(document.getElementById("movie-container") as HTMLDivElement);

  movieApp.displayNoResult(container);

  expect(container.innerHTML).toContain(`Inga sökresultat att visa`);
});

test("Test function createHtml, should create html", () => {

  document.body.innerHTML = `<div id="movie-container"></div>`;
  
  let movies: IMovie[] = [{
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
      Year: "2012"}];

  let container =(document.getElementById("movie-container") as HTMLDivElement);

  movieApp.createHtml(movies, container);

  expect(movies.length).toBe(2);
  expect(container.innerHTML).toContain("div");
  expect(container.innerHTML).toContain("<h3>Hunger games</h3>");
  expect(container.innerHTML).toContain("<img src=\"Mockingjay\" alt=\"Hunger games\">");
  expect(container.innerHTML).toContain("<h3>Aladin</h3>");
  expect(container.innerHTML).toContain("<img src=\"Fantasy\" alt=\"Aladin\">");
  expect(container.innerHTML).toContain("class=\"movie\"");
});

describe("Tests belonging to handleSubmit", () => {

  test("Should get data properly", async () => {

    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form><div id="movie-container"></div>`;

    const searchText = document.getElementById("searchText") as HTMLInputElement;
    searchText.value = "The hungergames";
    
    const spyOnGetData = jest.spyOn(movieService, "getData").mockReturnValue(new Promise<IMovie[]>((resolve)=> 
      resolve([{
                Title: "The hunger games",
                imdbID: "1",
                Type: "Action",
                Poster: "Mockingjay",
                Year: "2012"
      }])
    ));

    await movieApp.handleSubmit();

    expect(spyOnGetData).toBeCalledWith("The hungergames");
    expect(spyOnGetData).toHaveBeenCalledTimes(1);
 
    spyOnGetData.mockRestore();
  });

  test("Should call function createHtml", async () => {
    
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form><div id="movie-container"></div>`;

    const searchText = document.getElementById("searchText") as HTMLInputElement;
    searchText.value = "The hungergames";
    
    const spyOnCreateHtml = jest.spyOn(movieApp, "createHtml");
    const spyOnGetData = jest.spyOn(movieService, "getData").mockReturnValue(new Promise<IMovie[]>((resolve)=> 
      resolve([{
                Title: "The hunger games",
                imdbID: "1",
                Type: "Action",
                Poster: "Mockingjay",
                Year: "2012"
      }])
    ));

    await movieApp.handleSubmit();

    expect(spyOnCreateHtml).toBeCalledTimes(1);
    expect(spyOnGetData).toBeCalledWith("The hungergames");
    expect(spyOnGetData).toHaveBeenCalledTimes(1);
    spyOnGetData.mockRestore();
    spyOnCreateHtml.mockRestore();
  });

  test("Should call function displayNoResult", async () => {

    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form><div id="movie-container"></div>`;

    const searchText = document.getElementById("searchText") as HTMLInputElement;
    searchText.value = "";  

    const spyOnDisplayNoResult = jest.spyOn(movieApp, "displayNoResult").mockReturnValue();

    await movieApp.handleSubmit();

    expect(spyOnDisplayNoResult).toHaveBeenCalledTimes(1);
    spyOnDisplayNoResult.mockRestore();
  });
});