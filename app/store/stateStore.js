import {create} from 'zustand';

const store = (set) => ({
  isUserLogged: false,
  toggleLogin: () => set((state) => ({ isUserLogged: !state.isUserLogged })),
  isSignUpPop: false,
  toggleSignUpPop: () => set((state) => ({ isSignUpPop: !state.isSignUpPop }))
})




export const useStore = create(store);