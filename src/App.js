
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import ErrorPage from './Components/ErrorPage';
import CourseList from './Components/CourseList';


const appRouter = createBrowserRouter([

  {

    path : "/",
    element: <Header/>,
    children :
    [
      {

      path: "/",
      element : <Homepage/>

      },
      {

        path: "/api/teacher/courses",
        element : <CourseList/>
  
        }
    ],
    errorElement:<ErrorPage/>

  }

])


function App() {
  return (
        <RouterProvider router = {appRouter} />
  );
}


export default App;
