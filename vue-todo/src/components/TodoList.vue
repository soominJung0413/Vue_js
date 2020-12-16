<template>
  <ul>
    <li v-bind:key="index" v-for="(todoItem, index) in todoItems" class="shadow">
      <i v-on:click="toggleComplete(todoItem,index)" v-bind:class="{checkBtnCompleted: todoItem.completed}" class="checkBtn fas fa-check"></i>
      <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
      <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
        <i class="fas fa-trash"></i>
      </span>
    </li>
  </ul>
</template>

<script scoped>
export default {
  data: () => {
    return {
      todoItems: []
    }
  },
  methods: {
    removeTodo: function (todoItem,index) {
      //Template String
      console.log(`${todoItem} / ${index}`);
      localStorage.removeItem(todoItem);
      //배열요소 빼기 : (배열을 직접적으로 건드림) , slice(새로운 배열을 리턴 함)
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function (todoItem,index) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    }
  },
  created: function () {
    //ES6
   const map = Object.entries(localStorage);
   map.forEach((entry,index) => { 
     if(entry[0] !== 'loglevel:webpack-dev-server'){
     const item = JSON.parse(entry[1]);
     this.todoItems.push(item);
     }
     return ''});
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0px;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>