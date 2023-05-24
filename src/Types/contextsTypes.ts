import { Users } from './userTypes';

export interface AppContext {
  users: Users[][];
  page: number;
  numPerPage: number;
  paginated: Users[];
  userInput: number;
  showSidebar: boolean;
  modalLocation: { left: number; top: number };
  setModalLocation: (location: { left: number; top: number }) => void;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  updateNumPerPage: (inputValue: number) => void;
  setShowSidebar: (prev: boolean | any) => void;
}
