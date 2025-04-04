<template>
  <div class="row">
    <div class="col p-3">
      <h2>할일 수정</h2>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label htmlFor="todo">할일 :</label>
        <input
          type="text"
          id="todo"
          class="form-control"
          v-model="todoItem.todo"
        />
      </div>
      <div class="form-group">
        <label htmlFor="desc">설명 :</label>
        <textarea
          id="desc"
          rows="3"
          class="form-control"
          v-model="todoItem.desc"
        ></textarea>
      </div>
      <div class="form-group">
        <label htmlFor="done">완료여부 :</label> &nbsp;
        <input type="checkbox" v-model="todoItem.done" id="done" />
      </div>
      <div class="form-group">
        <button
          type="button"
          class="btn btn-primary m-1"
          @click="updateTodoHandler"
        >
          수 정
        </button>
        <!-- 이전 페이지로 다시 이동 -->
        <button
          type="button"
          class="btn btn-primary m-1"
          @click="router.push('/todos')"
        >
          취 소
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { inject, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const currentRoute = useRoute();
const todoList = inject('todoList');
const { updateTodo } = inject('actions');

// edit/1 경로라면 뒤에 있는 id 값인 1을 추출해서 해당하는 객체 반환
const matchedTodoItem = todoList.value.find(
  (item) => item.id === currentRoute.params.id
);
if (!matchedTodoItem) {
  router.push('/todos');
}
// 찾아온 객체를 반응형으로 복사
const todoItem = reactive({ ...matchedTodoItem });

const updateTodoHandler = () => {
  let { todo } = todoItem;
  if (!todo || todo.trim() === '') {
    // todo의 유효성 검사
    alert('할일은 반드시 입력해야 합니다.');
    return;
  }
  updateTodo({ ...todoItem }, () => {
    router.push('/todos'); // 할일 목록 페이지로 이동
  }); // 해당 아이템 값을 입력한 값으로 수정
};
</script>
