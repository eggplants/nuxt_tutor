//mutationによって変更される(actionでは変更できない？)
export const state = () => ({
  counter: 0,
  todos:[]
});
//同期処理
export const mutations = {
  increment(state) {
    state.counter++
  },
  updateTodos(state, payload) {
    state.todos = payload;
  }
};
//非同期処理/API
export const actions ={
  jsonLoader({commit}) {
    return new Promise(resolve => {
      //APIを読みに行く
      fetch("https://jsonplaceholder.typicode.com/todos"
      ).then(res => {
        if(res.ok) {
          return res.json();
        }
      }).then(res=>{
        commit("updateTodos", res); //コミットする
        resolve(res);
      });
    });
  }
};