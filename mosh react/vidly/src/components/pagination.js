import React from "react";
import propTypes from "prop-types";

const Pagination = props => {
  const { pageSize, itemsCount, currentPage, onPageChange } = props;

  const pagesNumber = Math.ceil(itemsCount / pageSize);

  const pages = [];

  for (let i = 1; i < pagesNumber + 1; i++) {
    pages.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              href="#"
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageSize: propTypes.number.isRequired,
  itemsCount: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired
};
export default Pagination;
