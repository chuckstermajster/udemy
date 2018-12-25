import _ from "lodash";

export default function paginate(movies, currentPage, PageSize) {
  const startIndex = (currentPage - 1) * PageSize;
  return _(movies)
    .slice(startIndex)
    .take(PageSize)
    .value();
}
