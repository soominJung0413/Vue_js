
const storage = {
  fetch() {
    const arr = [];
    //ES6
    const map = Object.entries(localStorage);
    map.forEach((entry,index) => {
      if(entry[0] !== 'loglevel:webpack-dev-server'){
        const item = JSON.parse(entry[1]);
        arr.push(item)
      }
      console.log(arr)
    });
    return arr;
  }
};

 const state = {
  // 전역적으로 사용되는 데이터
  todoItems: storage.fetch()
};

 const getters = {
    storedTodoItems(state){
      return state.todoItems;
    }
 };

 const mutations = {
   addOneItem(state, TodoItem) {
     const obj = {completed: false, item: TodoItem};
     //Object를 저장하기위해 stringify를 사용하는 것도 좋다.
     localStorage.setItem(TodoItem,JSON.stringify(obj));
     // mutations 는 반드시 state 인자로만 접근하다.
     state.todoItems.push(obj);
   },

   removeOneItem(state,itemInfo) {
     localStorage.removeItem(itemInfo.todoItem.item);
     //배열요소 빼기 : (배열을 직접적으로 건드림) , slice(새로운 배열을 리턴 함)
     state.todoItems.splice(itemInfo.index, 1);
   },

   toggleOneItem(state,itemInfo) {
     // 중앙 컴포넌트에서 관리되야한다.
     state.todoItems[itemInfo.index].completed = !state.todoItems[itemInfo.index].completed

     const item = itemInfo.todoItem.item;

     localStorage.removeItem(item);
     localStorage.setItem(item,JSON.stringify(itemInfo.todoItem));
   },

   clearAllItems(state) {
     state.todoItems = [];
     localStorage.clear();
   }
 };

 export default {
   state,
   getters,
   mutations
 }
