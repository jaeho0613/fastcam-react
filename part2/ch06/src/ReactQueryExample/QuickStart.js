import {useMutation, useQuery, useQueryClient} from "react-query";
import {getTodos, postTodo} from "./my-api";

export default function QuickStart() {
  const queryClient = useQueryClient();

  const query = useQuery("todos", getTodos);

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    }
  });

  if (query.isLoading) {
    return "Loading...";
  }

  if (query.error) {
    return "Error...";
  }

  const clickHandler = () => {
    mutation.mutate({
      title: 'test api',
      body: 'test body',
      userId: Math.random()
    });


    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }

  return (
    <div>
      <button onClick={clickHandler}>Post</button>
      <ul>
        {query.data.map(todo => (
          <li key={Math.random()}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}