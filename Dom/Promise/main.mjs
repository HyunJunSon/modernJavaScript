import fetch from 'node-fetch';

async function fetchTodo() {
  const url = "https://jsonplaceholder.typicode.com/todos/1"; // URL 수정

  const res = await fetch(url);
  const todo = await res.json();
  console.log(todo);
}

const rr = fetchTodo();
console.log(rr);