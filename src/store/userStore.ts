import { BaseUserData } from '@/types/user';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserStoreState {
  user: BaseUserData;
  setUser: (payload: BaseUserData) => void;
  removeUser: () => void;
}

const initialState: BaseUserData = {
  id: undefined,
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  image: '',
};

const useUserStore = create<UserStoreState>()(
  devtools(
    persist(
      (set) => ({
        user: initialState,
        setUser: (payload: BaseUserData) =>
          set(() => ({ user: payload })),
        removeUser: () => set(() => ({ user: initialState })),
      }),
      {
        name: 'user-storage',
      }
    )
  )
);

export default useUserStore;
