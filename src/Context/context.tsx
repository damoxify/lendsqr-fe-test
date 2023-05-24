import { createContext, useState, useEffect, useContext } from 'react';
import { AppContext } from '../Types/contextsTypes';
import { Users } from '../Types/userTypes';
import paginate, { customFetch, fetchUsersFromLocalStorage } from '../utils';

const AppContent = createContext<AppContext | null>(null);

const AppProvider = ({children }) => {
  const [numPerPage, setNumberPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [totalUsers, setTotalUsers] = useState<Users[]>([]);
  const [users, setUsers] = useState(
    paginate(fetchUsersFromLocalStorage(), numPerPage) as Users[][]
  );
  const [paginated, setPaginated] = useState(users[page]);
  const [userInput, setUserInput] = useState(numPerPage);
  const [showSidebar, setShowSidebar] = useState(false);
  const [modalLocation, setModalLocation] = useState({ left: 0, top: 0 });

  const nextPage = () => {
    setPage((currentPage) => {
      let nextPage = currentPage + 1;
      if (nextPage > paginated.length - 1) {
        nextPage = paginated.length - 1;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((currentPage) => {
      let prev = currentPage - 1;
      if (prev < 0) {
        prev = 0;
      }
      return prev;
    });
  };

  const updateNumPerPage = (inputValue: number) => {
    if (inputValue > totalUsers.length) {
      inputValue = totalUsers.length;
    }
    setNumberPerPage(inputValue);
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await customFetch.get<Promise<Users[]>>('/users');
        // Here I transformed the data to randomly add status to users since the api didn't provide that
        const modifiedData = (await data).map((item: Users, index: number) => {
          return {
            ...item,
            status:
              index % 3 === 0
                ? 'active'
                : index % 5 === 0
                ? 'blacklisted'
                : index % 7 === 0
                ? 'inactive'
                : 'pending',
          };
        });
        // Saving users to local storage
        localStorage.setItem('Users', JSON.stringify(modifiedData));
        setTotalUsers(fetchUsersFromLocalStorage());
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setPaginated(users[page]);
  }, [page]);
  useEffect(() => {
    setUsers(paginate(fetchUsersFromLocalStorage(), numPerPage));
  }, [numPerPage]);

  return (
    <AppContent.Provider
      value={{
        numPerPage,
        page,
        users,
        userInput,
        paginated,
        modalLocation,
        showSidebar,
        setModalLocation,
        setPage,
        nextPage,
        prevPage,
        updateNumPerPage,
        setShowSidebar,
      }}
    >
      {children}
    </AppContent.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContent);
};

export default AppProvider;