// Type definition related to `show`

/**
 * Compact version of `show` interface. Will be used in response.
 */
export interface IShowCompact {
    image: string,
    slug: string,
    title: string,
}

/**
 * Standard version of `show` interface. This type used in JSON request.
 */
export type IShow = IShowCompact & {
    drm: boolean,
    episodeCount: number,
    image: {
        showImage: string,
    }
}

/**
 * Request format with list of `show`.
 */
export interface RequestWithShow {
    body: {
        payload: IShow[],
    }
}
