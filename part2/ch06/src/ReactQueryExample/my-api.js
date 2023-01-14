import axios from "axios";

let todos = [
  {
    id: '1',
    title: "jummy1"
  },
  {
    id: '2',
    title: "jummy2"
  },
  {
    id: '3',
    title: "jummy3"
  },
  {
    id: '4',
    title: "jummy4"
  },
  {
    id: '5',
    title: "jummy5"
  },
];

export const getTodos = () =>
  axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
    return todos;
  });


export const postTodo = (todo) =>
  axios.post("https://jsonplaceholder.typicode.com/posts", todo).then((res) => {
    console.log(res.data);
    todos.push(res.data);
    return res.data;
  });
