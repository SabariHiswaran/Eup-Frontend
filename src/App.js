
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import ErrorPage from './Components/ErrorPage';
import CourseList from './Components/CourseList';
import CourseSubTopicList from './Components/CourseSubTopicList';
import TeacherMeetingForm from './Components/TeacherMeetingForm';
import MeetingsList from './Components/MeetingsList';
import EditMeeting from './Components/EditMeeting';
import { RoleContext } from './Context/RoleContext';
import { useState } from 'react';


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
    
      },
      {
        path : "/api/teacher/courses/upcomingMeetings",
        element : <MeetingsList/>
      },
      {
        path : "/api/teacher/courses/upcomingMeetings/editMeeting/:meetingId",
        element : <EditMeeting/>
      }
    ],
    errorElement:<ErrorPage/>

  }

])


function App() {

  const [teacherRole , setTeacherRole ] = useState(true)
  const [studentRole,setStudentRole]  =useState(false)

  const handleRole = () => {
    setTeacherRole(prevVal => !prevVal)
    setStudentRole(prevVal => !prevVal)
  }

  return (
        <RoleContext.Provider value={ { teacherRole : teacherRole , studentRole : studentRole , handleRole : handleRole}}>
        <RouterProvider router = {appRouter} />
        </RoleContext.Provider>
  );
}


export default App;
