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
  currentlyPlaying: null,
  setCurrentlyPlaying: (playingSong) => set({ currentlyPlaying: playingSong }),
  isPlaying: false,
  togglePlayPause: () => set((state) => ({ isPlaying: !state.isPlaying })),
})




export const useStore = create(store);