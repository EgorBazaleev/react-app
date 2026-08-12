import { OMDbFilm } from "./OMDbFilm";

export interface OMDbSearchResponse {
    Search: OMDbFilm[];
    totalResults: string;
    Response: string;
}