
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import ErrorPage from './Components/ErrorPage';
import CourseList from './Components/CourseList';
import CourseSubTopicList from './Components/CourseSubTopicList';
import TeacherMeetingForm from './Components/TeacherMeetingForm';


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
  
      },
      {
  
      path: "/api/teacher/courses/:courseTopic",
      element : <CourseSubTopicList/>
    
      },
      {
  
      path: "/api/teacher/courses/:courseTopic/:topic",
      element : <TeacherMeetingForm/>
    
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
