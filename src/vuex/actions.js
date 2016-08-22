export const addList = function ({ dispatch, state }) {
  dispatch('ADD_NEW_LIST')
}
export const pushList = function ({ dispatch, state }) {
  const ob = { aaa: 'ccc' }
  dispatch('PUSH_LIST', ob)
}
export const initList = function ({ dispatch, state }) {
  const list = [
    {aaa: 222},
    {aaa: 222},
    {aaa: 222},
    {aaa: 222},
    {aaa: 111}
  ]
  dispatch('INIT_LIST', list)
}
