
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import ErrorPage from './Components/ErrorPage';


const appRouter = createBrowserRouter([

  {

    path : "/",
    element: <Header/>,
    children :
    [{

      path: "/",
      element : <Homepage/>

    }],
    errorElement:<ErrorPage/>

  }

])


function App() {
  return (
        <RouterProvider router = {appRouter} />
  );
}


export default App;
