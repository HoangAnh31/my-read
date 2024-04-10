import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
import * as BooksAPI from "../BooksAPI";

//Create a context for the data provider
const DataProviderContext = createContext();

const shelfs = [
  { id: "currentlyReading", value: "Currently Reading" },
  { id: "wantToRead", value: "Want to Read" },
  { id: "read", value: "Read" },
];

//Data provider component
export const DataProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [booksSearhResult, setBooksSearchResult] = useState(null);

  const handleShelfBook = useCallback(async (book, shelf) => {
    await BooksAPI.update(book, shelf);
  }, []);

  const handleSearchBook = useCallback(async (inputStr) => {
    try {
      const dataResult = await BooksAPI.search(inputStr);

      if (!dataResult || dataResult.error) {
        throw new Error("Error fetching search results");
      }

      setBooksSearchResult(dataResult);
    } catch (error) {
      console.log("Search API error: ", error);
      setBooksSearchResult(null);
    }
  }, []);

  //stimulated fetch function
  const fetchData = async () => {
    try {
      //stimulated API call -> get all books
      const data = await BooksAPI.getAll();
      setAllBooks(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  //fetch data when component mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DataProviderContext.Provider
      value={{
        allBooks,
        shelfs,
        booksSearhResult,
        isLoading,
        error,
        handleShelfBook,
        handleSearchBook,
      }}
    >
      {children}
    </DataProviderContext.Provider>
  );
};

//custom hook to consume data from the context
export const useDataProvider = () => {
  const context = useContext(DataProviderContext);
  if (!context) {
    return new Error("useDataProvider must be used within a DataProvider");
  }
  return context;
};
