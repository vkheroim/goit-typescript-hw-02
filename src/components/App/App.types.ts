

export interface ImageResult {
    id: string,
    url: string,
    urls: {
        regular: string,
        small: string
    },
    alt_description: string,
    color: string,
    likes: number,
}

export interface FetchImagesResponse {
    results: ImageResult[],
    total: number
}
