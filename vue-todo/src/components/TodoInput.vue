<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- v-on:이벤트 = 실행메서드 -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  //Arrow Function
  data: () => {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    // 화살표 함수 쓰면 바인딩 잘못 됨
    addTodo: function() {
      if(this.newTodoItem !== '') {
        const obj = {completed: false, item: this.newTodoItem};
      //Object를 저장하기위해 stringify를 사용하는 것도 좋다.
      localStorage.setItem(this.newTodoItem,JSON.stringify(obj));
      this.clearInput();
      }
    },
    clearInput: function () {
      // 단일 책임 원칙
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
input:focus {
    outline: none;
  }
.inputBox {
    background-color: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
.addBtn {
    color: white;
    vertical-align: middle;
  }
</style>