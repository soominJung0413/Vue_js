<template>
<!--   name = 클래스명 tag = HTML 태그 -->
<transition-group name="list" tag="ul">
    <li v-bind:key="index" v-for="(todoItem, index) in propsdata" class="shadow">
      <i v-on:click="toggleComplete(todoItem,index)" v-bind:class="{checkBtnCompleted: todoItem.completed}" class="checkBtn fas fa-check"></i>
      <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
      <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
        <i class="fas fa-trash"></i>
      </span>
    </li>
  </transition-group>
</template>

<script scoped>
export default {
  props: ['propsdata'],
  methods: {
    removeTodo (todoItem,index) {
      this.$emit('removeItem', todoItem, index);
    },
    toggleComplete (todoItem,index) {
      this.$emit('toggleItem',todoItem,index);
    }
  },
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

/* Transition */
.list-enter-active, .list-leave-active {
  /*지속 시간*/
  transition: all 1s;
}
.list-enter, .list-leave-to {
  /* list-enter + list-leave-to */
  /* 지우거나 추가할 때 y 축으로 30 픽셀 올리면서 선명해지거나 흐려진다.*/
  opacity: 0;
  transform: translateY(30px);
}
</style>
