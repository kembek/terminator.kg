export default function ({ store, $axios }) {
  $axios.get('/api/categories.json').then(
    res => {
      store.dispatch('Categories/SetItems', res.data.items)
    })
}