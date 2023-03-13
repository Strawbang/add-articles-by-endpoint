import { getArticles } from "./getArticles";
const mockSetState = jest.fn();

jest.mock('react', () => ({
    useState: (initial: any) => [initial, mockSetState]
  }));

test('articles', () => {
    getArticles('https://wwww.test.com', mockSetState);
    expect(mockSetState).toHaveBeenCalled();
  });