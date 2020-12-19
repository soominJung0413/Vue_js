<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- v-on:이벤트 = 실행메서드 -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">경고!
        <i class="fas fa-times closeModalBtn" @click="showModal=false"></i>
      </h3>

      <p slot="body"> 입력 값이 없습니다. </p>

      <p slot="footer">&copy; SooMin</p>

    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  //Arrow Function
  data () {
    return {
      newTodoItem: "",
      showModal : false
    }
  },
  components: {
    //ES6
    Modal
  },
  methods: {
    addTodo () {
      if(this.newTodoItem !== '') {
        //commit() 으로 Vuex 에 접근
        this.$store.commit('addOneItem',this.newTodoItem);
      this.clearInput();
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput () {
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
