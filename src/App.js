import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blogs from "./components/Blogs/Blogs";
import { loadTopics } from "./loaders/loadTopics";
import Quiz from "./components/Quiz/Quiz";
import { loadQuiz } from "./loaders/loadQuiz";
import Page404 from "./Page404";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: loadTopics,
          element: <Home></Home>,
        },
        {
          path: "quiz/:id",
          loader: ({ params }) => {
            return loadQuiz(params.id);
          },
          element: <Quiz></Quiz>,
        },
        {
          path: "stats",
          element: <Statistics></Statistics>,
        },
        {
          path: "blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "*",
          element: <Page404></Page404>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
