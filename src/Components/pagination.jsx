import React from "react";
import { Pagination, Button, PaginationItem } from "reactstrap";

function CustomPagination({ activePage, totalPages, onPageChange }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <Pagination
      className="mt-4"
      size="lg"
      activePage={activePage}
      totalPages={totalPages}
      onChange={handlePageChange}
    >
      <Button
        style={{ width: "100px", display: "flex", justifyContent: "center" }}
        className="text-dark bg-transparent"
        disabled={activePage === 1}
        onClick={() => handlePageChange(activePage - 1)}
      >
        Previous
      </Button>
      {[...Array(totalPages).keys()].map((pageNumber) => (
        <PaginationItem
          key={pageNumber + 1}
          className="text-dark px-2 rounded-2 pt-2"
          active={pageNumber + 1 === activePage}
          onClick={() => handlePageChange(pageNumber + 1)}
        >
          {pageNumber + 1}
        </PaginationItem>
      ))}
      <Button
        style={{ width: "100px", display: "flex", justifyContent: "center" }}
        className="text-dark bg-transparent"
        disabled={activePage === totalPages}
        onClick={() => handlePageChange(activePage + 1)}
      >
        Next
      </Button>
    </Pagination>
  );
}

export default CustomPagination;
