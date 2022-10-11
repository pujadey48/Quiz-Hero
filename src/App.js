import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blogs from "./components/Blogs/Blogs";
import { loadTopics } from "./loaders/loadTopics";

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
          path: "stats",
          // loader: productsAndCartLoader,
          element: <Statistics></Statistics>,
        },
        {
          path: "blogs",
          element: <Blogs></Blogs>,
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
