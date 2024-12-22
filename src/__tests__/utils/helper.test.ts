import {
  truncateText,
  formatPrice,
  formatDate,
  filterProducts,
  getButtonVariant,
  handlePriceChange,
  minQuantityReached,
  formatCardNumber,
  checkOutOfStock,
} from '../../utils/helper';
import {
  activeSort,
  mockProducts,
  productInCart,
} from '../../__mocks__/mockData';

const mockSetState = jest.fn();

describe('truncateText', () => {
  test('truncates text to the last space within the max length', () => {
    expect(truncateText('This is a test string', 10)).toBe(
      'This is a'
    );
  });

  test('returns full text if within the max length', () => {
    expect(truncateText('Short text', 20)).toBe('Short text');
  });

  test('does not cut words in half if possible', () => {
    expect(truncateText('Hello World', 8)).toBe('Hello');
  });
});

describe('formatPrice', () => {
  test('formats price with two decimal places and a euro symbol', () => {
    expect(formatPrice(123.456)).toBe('123.46€');
    expect(formatPrice(50)).toBe('50.00€');
  });
});

describe('formatDate', () => {
  test('formats date to DD/MM/YYYY format for en-GB locale', () => {
    expect(formatDate('2024-12-22')).toBe('22/12/2024');
  });
});

describe('filterProducts', () => {
  test('filters products by search term and price range', () => {
    expect(
      filterProducts(mockProducts, 'Product A', '', '', '')
    ).toEqual([mockProducts[0]]);

    expect(filterProducts(mockProducts, '', '', 50, 150)).toEqual([
      mockProducts[0],
    ]);
  });

  test('returns all products if no filters are applied', () => {
    expect(filterProducts(mockProducts, '', '', '', '')).toEqual(
      mockProducts
    );
  });
});

describe('getButtonVariant', () => {
  test('returns primary for matching sort and order', () => {
    expect(getButtonVariant('price', 'asc', activeSort)).toBe(
      'primary'
    );
  });

  test('returns white for non-matching sort or order', () => {
    expect(getButtonVariant('title', 'asc', activeSort)).toBe(
      'white'
    );
    expect(getButtonVariant('price', 'desc', activeSort)).toBe(
      'white'
    );
  });
});

describe('handlePriceChange', () => {
  test('updates state with a valid number', () => {
    handlePriceChange('123', mockSetState);
    expect(mockSetState).toHaveBeenCalledWith(123);
  });

  test('updates state with an empty value', () => {
    handlePriceChange('', mockSetState);
    expect(mockSetState).toHaveBeenCalledWith('');
  });
});

describe('minQuantityReached', () => {
  test('returns true if quantity is 1 or matches the minimum', () => {
    expect(minQuantityReached(1, 5)).toBe(true);
    expect(minQuantityReached(5, 5)).toBe(true);
  });

  test('returns false for other quantities', () => {
    expect(minQuantityReached(3, 5)).toBe(false);
  });
});

describe('formatCardNumber', () => {
  test('formats card number with spaces after every 4 digits', () => {
    expect(formatCardNumber('1234567890123456')).toBe(
      '1234 5678 9012 3456'
    );
    expect(formatCardNumber('1234')).toBe('1234');
  });
});

describe('checkOutOfStock', () => {
  test('returns true if stock is below minimum or matches cart quantity', () => {
    expect(checkOutOfStock(4, 5, productInCart)).toBe(true);
    expect(checkOutOfStock(5, 5, productInCart)).toBe(true);
  });

  test('returns false if stock is sufficient and cart quantity does not match', () => {
    expect(checkOutOfStock(10, 5, productInCart)).toBe(false);
  });
});
