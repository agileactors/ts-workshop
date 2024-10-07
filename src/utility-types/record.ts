// Record

// The 'Record' utility type in TypeScript is used to create an object type
// whose property keys are 'Keys' and property values are 'Type'.
// It's useful for objects where keys have a consistent value type.

// Syntax: Record<Keys, Type>

type MovieTitle = 'Inception' | 'Titanic' | 'Interstellar';

interface IMovieInfo {
    genre: string;
    duration: number;
    releaseDate: Date;
}

// Creating a Record type for a collection of movies with their titles as keys
const movies: Record<MovieTitle, IMovieInfo> = {
    'Inception': {
        genre: 'Science Fiction',
        duration: 148,
        releaseDate: new Date('2010-07-16'),
    },
    'Titanic': {
        genre: 'Romance',
        duration: 195,
        releaseDate: new Date('1997-12-19'),
    },
    'Interstellar': {
        genre: 'Adventure',
        duration: 169,
        releaseDate: new Date('2014-11-07'),
    }
};
// In this example, each movie title is linked to its respective detailed attributes.