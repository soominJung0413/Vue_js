


 const  addOneItem = (state, TodoItem) => {
    const obj = {completed: false, item: TodoItem};
    //Object를 저장하기위해 stringify를 사용하는 것도 좋다.
    localStorage.setItem(TodoItem,JSON.stringify(obj));
    // mutations 는 반드시 state 인자로만 접근하다.
    state.todoItems.push(obj);
  };

  const removeOneItem = (state,itemInfo) => {

    localStorage.removeItem(itemInfo.todoItem.item);
    //배열요소 빼기 : (배열을 직접적으로 건드림) , slice(새로운 배열을 리턴 함)
    state.todoItems.splice(itemInfo.index, 1);
  };

  const toggleOneItem = (state,itemInfo) => {
    // 중앙 컴포넌트에서 관리되야한다.
    state.todoItems[itemInfo.index].completed = !state.todoItems[itemInfo.index].completed

    const item = itemInfo.todoItem.item;

    localStorage.removeItem(item);
    localStorage.setItem(item,JSON.stringify(itemInfo.todoItem));
  };

  const clearAllItems = (state) => {
    state.todoItems = [];
    localStorage.clear();
  };

  export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }
