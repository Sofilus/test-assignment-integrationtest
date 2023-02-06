import { getData } from "../services/movieservice";

const movie  = [{ Title: "The hunger games", imdbID: "1", Type: "Movie", Poster: "Mockingjay", Year: "2012"}]

jest.mock("axios", () => ({
    get: async (url: string) => {
        return new Promise((resolve, reject) => {
            if(!url.endsWith("error")) {
                resolve({data: {Search: movie}, status: 200});
            } else {
                reject({ data: [], status: 500});
            }
        })
    }
}));

describe("Tests belonging to function getData", () => {
    test("Should get data correctly",async () => {

        let data = await getData("Hej");

        expect(data.length).toBe(1);
        expect(data[0].Title).toBe("The hunger games");
    });

    test("Should be error", async () => {
        let data = await getData("error");

        expect(data.length).toBe(0);
    });
});