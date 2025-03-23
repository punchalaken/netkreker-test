type String_Null = string | null
type Array_Null<T> = T[] | null

interface VideoSource {
    url: Array_Null<string>
    quality: Array_Null<string>
    duration: Array_Null<string>
    voice: Array_Null<string>
}

interface Film {
    id: number
    id_kinopoisk: number
    url: String_Null
    type: String_Null
    title: string
    title_alternative: String_Null
    tagline: String_Null
    description: String_Null
    year: number
    poster: String_Null
    trailer: String_Null
    age: String_Null
    actors: Array_Null<string>
    countries: Array_Null<string>
    genres: string[]
    directors: Array_Null<string>
    screenwriters: Array_Null<string>
    producers: Array_Null<string>
    operators: Array_Null<string>
    composers: Array_Null<string>
    painters: Array_Null<string>
    editors: Array_Null<string>
    budget: String_Null
    rating_kinopoisk: String_Null
    rating_imdb: String_Null
    kinopoisk_votes: String_Null
    imdb_votes: String_Null
    fees_world: String_Null
    fees_russia: String_Null
    premiere_world: String_Null
    premiere_russia: String_Null
    frames: Array_Null<string>
    screenshots: Array_Null<string>

    videocdn: VideoSource
    hdvb: VideoSource
    collapse: VideoSource
    kodik: VideoSource
}

type SortValues = 'title' | 'year' | null

export type { Film, SortValues }
