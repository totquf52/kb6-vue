<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <!-- $event : 자식 컴포넌트에서 발생한 이벤트의 인자   -->
        <TodoListItem
          v-for="todoItem in todoList"
          :key="todoItem.id"
          :todoItem="todoItem"
          @delete-todo="$emit('delete-todo', $event)"
          @toggle-completed="$emit('toggle-completed', $event)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';
export default {
  name: 'TodoList',
  components: { TodoListItem },
  props: {
    todoList: { type: Array, required: true },
  },
  //   자식에게 받아온 이벤트 부모에게 그대로 전달
  emits: ['delete-todo', 'toggle-completed'],
};
</script>
