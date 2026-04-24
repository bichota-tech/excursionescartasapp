import { defineStore } from 'pinia'
import { getPosts, getPostBySlug, getRelatedPosts } from '../api/blogService'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchPosts() {
      this.loading = true
      this.error = null
      try {
        this.posts = await getPosts()
      } catch (e) {
        this.error = e
      } finally {
        this.loading = false
      }
    },

    async fetchPost(slug) {
      this.loading = true
      this.error = null
      try {
        return await getPostBySlug(slug)
      } catch (e) {
        this.error = e
        return null
      } finally {
        this.loading = false
      }
    },

    async fetchRelatedPosts(slug) {
      try {
        return await getRelatedPosts(slug)
      } catch (e) {
        console.error('Failed to fetch related posts', e)
        return []
      }
    }
  }
})