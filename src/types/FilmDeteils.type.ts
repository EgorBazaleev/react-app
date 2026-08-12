import { Comment } from "./Comment.type";
import { Film } from "./Film.type";

export interface FilmDetails extends Film {
    description: string;
    type: string;
    productionDate: Date;
    length: number;
    genres: string[];
    comments: Comment[];
}