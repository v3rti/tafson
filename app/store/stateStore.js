import {create} from 'zustand';

const store = (set) => ({
  isUserLogged: false,
  toggleLogin: () => set((state) => ({ isUserLogged: !state.isUserLogged })),
  isSignUpPop: false,
  toggleSignUpPop: () => set((state) => ({ isSignUpPop: !state.isSignUpPop })),
  isLoginPop: false,
  toggleLoginPop: () => set((state) => ({isLoginPop: !state.isLoginPop})),
  error: null,
  setError: (errorMessage) => set({ error: errorMessage }),
})




export const useStore = create(store);