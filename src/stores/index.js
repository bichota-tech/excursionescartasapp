import { defineStore } from 'pinia'
export { useBlogStore } from './blogStore'

// ─── App / Nav Store ────────────────────────────────────────────────────────
export const useAppStore = defineStore('app', {
  state: () => ({
    menuOpen: false,
  }),
  actions: {
    toggleMenu() { this.menuOpen = !this.menuOpen },
    closeMenu()  { this.menuOpen = false },
  },
})
