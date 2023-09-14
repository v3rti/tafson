import {create} from 'zustand';

const store = (set) => ({
  isUserLogged: false,
  toggleLogin: () => set((state) => ({ isUserLogged: !state.isUserLogged })),
  isSignUpPop: false,
  toggleSignUpPop: () => set((state) => ({ isSignUpPop: !state.isSignUpPop })),
  isLoginPop: false,
  toggleLoginPop: () => set((state) => ({isLoginPop: !state.isLoginPop})),
  error: null,
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
})




export const useStore = create(store);