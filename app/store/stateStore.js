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
  setIsPlaying: (value) => set({isPlaying: value}),
  currentSongInfos: {},
  setCurrentSongInfos: (value) => set({currentSongInfos: value}),
  playQueue: [],
  setPlayQueue: (value) => set({playQueue: value}),
  currentSongIndex:0,
  setCurrentSongIndex: (value) => set({currentSongIndex: value}),
  reviewArtist: null,
  setReviewArtist: (value) => set({reviewArtist: value})
})




export const useStore = create(store);