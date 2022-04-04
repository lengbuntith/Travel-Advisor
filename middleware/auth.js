export default async function (context) {
  console.log(context)
  context
    .$axios({
      method: 'get',
      url: '/auth/me',
    })
    .then((res) => {
      if (!res.data.success) {
        context.redirect('/login')
      } else {
        context.store.commit('SET_USER', res.data.data)
      }
    })
}
