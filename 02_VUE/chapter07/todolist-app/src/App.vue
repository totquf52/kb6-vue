<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />
        <!-- todoList는 자식에게 전달 -->
        <!-- deleteTodo, toggleCompleted는 자식에게 받아온 이벤트로 처리 -->
        <TodoList
          :todoList="todoList"
          @delete-todo="deleteTodo"
          @toggle-completed="toggleCompleted"
        />
      </div>
    </div>
  </div>
</template>
<script>
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';

let ts = new Date().getTime();
export default {
  name: 'App',
  components: { InputTodo, TodoList },
  data() {
    return {
      todoList: [
        { id: ts, todo: '자전거 타기', completed: false },
        { id: ts + 1, todo: '딸과 공원 산책', completed: true },
        { id: ts + 2, todo: '일요일 애견 카페', completed: false },
        { id: ts + 3, todo: 'Vue 원고 집필', completed: false },
      ],
    };
  },
  methods: {
    // 할일을 추가하는 메소드
    addTodo(todo) {
      if (todo.length >= 2) {
        // 사용자가 입력한 할일이 2글자 이상인 경우 todolist에 추가
        this.todoList.push({
          id: new Date().getTime(),
          todo: todo,
          completed: false,
        });
      }
    },
    // 특정 할일을 삭제하는 메소드
    deleteTodo(id) {
      // 삭제할 todo가 todolist에서 몇번째 인덱스인지 id를 통해 검색
      let index = this.todoList.findIndex((item) => id === item.id);
      // index 위치부터 한개의 todo를 삭제
      this.todoList.splice(index, 1);
    },
    // 특정 할일의 완료여부 변경하는 메소드
    toggleCompleted(id) {
      // 완료시킬 todo가 todolist에서 몇번째 인덱스인지 id를 통해 검색
      let index = this.todoList.findIndex((item) => id === item.id);
      // 클릭한 todo의 완료 여부를 반대로 변경
      this.todoList[index].completed = !this.todoList[index].completed;
    },
  },
};
</script>
