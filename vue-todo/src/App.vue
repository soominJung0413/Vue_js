<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

//Vue
export default {
  data() {
    return {
      todoItems : []
    }
  },
  methods: {
    removeOneItem(todoItem,index){
      //Template String
      localStorage.removeItem(todoItem.item);
      //배열요소 빼기 : (배열을 직접적으로 건드림) , slice(새로운 배열을 리턴 함)
      this.todoItems.splice(index, 1);
    },
    addOneItem(TodoItem) {
      const obj = {completed: false, item: TodoItem};
      //Object를 저장하기위해 stringify를 사용하는 것도 좋다.
      localStorage.setItem(TodoItem,JSON.stringify(obj));
      // Vue Reactivity
      this.todoItems.push(obj);
    },
    toggleOneItem(todoItem, index) {
      // 중앙 컴포넌트에서 관리되야한다.
      this.todoItems[index].completed = !this.todoItems[index].completed

      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    },
    clearAllItems(){
      this.todoItems = [];
      localStorage.clear();
    }
  },
  created() {
    //ES6
    const map = Object.entries(localStorage);
    map.forEach((entry,index) => {
      if(entry[0] !== 'loglevel:webpack-dev-server'){
        const item = JSON.parse(entry[1]);
        this.todoItems.push(item);
      }
      return ''});
  },
  components: {
    //태그명 : 내용 ES6 에서는 값과 내용이 같을시 생략됨
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
