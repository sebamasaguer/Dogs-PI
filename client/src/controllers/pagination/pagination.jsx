import styled from './pagination.module.css'

export default function Pagination({dogsPerPage, allDogs, pagination, currentPage}) {
    const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumber.push(i);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      pagination(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageNumber.length) {
      pagination(currentPage + 1);
    }
  };
    return(
        <nav>
        <ul className={styled.crumbs}>
          <button id='pag'
            className="arrow"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          {pageNumber.map(number => (
            <button id='pag'
              key={number}
              className={currentPage === number ? styled.crumb__active : styled.crumb}
              onClick={() => pagination(number)}
            >
              {number}
            </button>
          ))}
          <button id='pag'
            className="arrow"
            onClick={handleNextPage}
            disabled={currentPage === pageNumber.length}
          >
            {">"}
          </button>
        </ul>
      </nav>
    )
};