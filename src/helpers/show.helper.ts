import { IShow, IShowCompact } from "../types/show";

// This file contain helpers related to `show`

/**
 * Convert `IShow` typed object to `IShowCompact` type.
 * @param show The origin object
 * @returns converted object
 */
const toShowCompact = (show: IShow): IShowCompact => ({
    image: show.image?.showImage ?? "",
    slug: show.slug,
    title: show.title,
});

export default {
    toShowCompact,
}
