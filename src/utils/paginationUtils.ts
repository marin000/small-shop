export const calculateTotalPages = (
  totalItems: number,
  itemsPerPage: number
): number => {
  return Math.ceil(totalItems / itemsPerPage);
};

export const calculateCurrentPage = (
  currentSkip: number,
  itemsPerPage: number
): number => {
  return Math.floor(currentSkip / itemsPerPage) + 1;
};

export const calculatePaginationRange = (
  currentPage: number,
  totalPages: number
): number[] => {
  let startPage = currentPage - 2;
  let endPage = currentPage + 2;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(5, totalPages);
  }
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - 4);
  }

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
};
