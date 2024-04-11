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

const shelfsInitial = [
  { id: "currentlyReading", value: "Currently Reading", arrBooks: [] },
  { id: "wantToRead", value: "Want to Read", arrBooks: [] },
  { id: "read", value: "Read", arrBooks: [] },
];

//Data provider component
export const DataProvider = ({ children }) => {
  const [shelfs, setShelfs] = useState(shelfsInitial);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [booksSearhResult, setBooksSearchResult] = useState(null);

  const handleShelfBook = useCallback(async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    fetchData();
  }, []);

  const handleSearchBook = useCallback(async (inputStr) => {
    try {
      const dataResult = await BooksAPI.search(inputStr);

      if (!dataResult || dataResult.error) {
        throw new Error("Error fetching search results");
      }

      setBooksSearchResult(dataResult);
    } catch (error) {
      //console.log("Search API error: ", error);
      setBooksSearchResult(null);
    }
  }, []);

  //stimulated fetch function
  const fetchData = async () => {
    try {
      //stimulated API call -> get all books
      const data = await BooksAPI.getAll();

      // Update shelfs with books
      const updatedShelfs = shelfsInitial.map((shelf) => ({
        ...shelf,
        arrBooks: data.filter((book) => book.shelf === shelf.id),
      }));

      setShelfs(updatedShelfs);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  //fetch data when component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataProviderContext.Provider
      value={{
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
