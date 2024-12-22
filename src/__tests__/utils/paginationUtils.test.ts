import {
  calculateTotalPages,
  calculateCurrentPage,
  calculatePaginationRange,
} from '../../utils/paginationUtils';

describe('Pagination Helper Functions', () => {
  describe('calculateTotalPages', () => {
    test('calculates total pages correctly', () => {
      expect(calculateTotalPages(10, 3)).toBe(4);
      expect(calculateTotalPages(5, 5)).toBe(1);
      expect(calculateTotalPages(0, 3)).toBe(0);
    });
  });

  describe('calculateCurrentPage', () => {
    test('calculates current page correctly', () => {
      expect(calculateCurrentPage(5, 3)).toBe(2);
      expect(calculateCurrentPage(10, 3)).toBe(4);
      expect(calculateCurrentPage(0, 5)).toBe(1);
    });
  });

  describe('calculatePaginationRange', () => {
    test('calculates pagination range correctly', () => {
      expect(calculatePaginationRange(3, 5)).toEqual([1, 2, 3, 4, 5]);
      expect(calculatePaginationRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
      expect(calculatePaginationRange(5, 5)).toEqual([1, 2, 3, 4, 5]);
      expect(calculatePaginationRange(4, 5)).toEqual([1, 2, 3, 4, 5]);
      expect(calculatePaginationRange(3, 4)).toEqual([1, 2, 3, 4]);
    });
  });
});
