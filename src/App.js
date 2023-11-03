
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
import { Role } from './Components/Context/RoleContext';
import StudentHomepage from './Components/Student/StudentHomepage';
import StudentCourseList from './Components/Student/StudentCourseList';
import StudentErrorPage from './Components/Student/StudentErrorPage';
import StudentSubTopicList from './Components/Student/StudentSubTopicList';
import StudentMeetingsList from './Components/Student/StudentMeetingList';
import SelectedMeeting from './Components/Student/SelectedMeeting';
import EnrolledMeetingList from './Components/Student/EnrolledMeetingList';
import UnEnrollMeeting from './Components/Student/UnEnrollMeeting';
import EnrolledMembers from './Components/EnrolledMembers';
import SignupPage from './Components/SignupPage';
import LogininPage from './Components/LogininPage';
import { useEffect } from 'react';
import { Auth } from './Components/Context/AuthContext';
import { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import UpdateMeetingStatus from './Components/UpdateMeetingStatus';
import RewardsPage from './Components/RewardsPage';
import BadgePage from './Components/BadgePage';
import StudentBadgePage from './Components/Student/StudentBadgePage';
import StudentFeedbackPage from './Components/Student/StudentFeedbackPage';
import MeetingFeedback from './Components/Student/MeetingFeedback';
import CommonProfile from './Components/CommonProfile';



const teacherRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignupPage />,
  }
  , {
    path : "/login",
    element : <LogininPage/>,
  },
  {

    path: "/api/teacher",
    element: <Header />,
    children:
      [
        {

          path: "/api/teacher",
          element: <Homepage />

        },
        {

          path: "/api/teacher/courses",
          element: <CourseList />

        },
        {

          path: "/api/teacher/courses/:courseTopic",
          element: <CourseSubTopicList />

        },
        {

          path: "/api/teacher/courses/:courseTopic/:topic",
          element: <TeacherMeetingForm />

        },
        {
          path: "/api/teacher/courses/upcomingMeetings",
          element: <MeetingsList />
        },
        {
        path:"/api/teacher/courses/upcomingMeetings/status/:id",
        element : <UpdateMeetingStatus/>
        },
        {
          path: "/api/teacher/courses/upcomingMeetings/editMeeting/:meetingId",
          element: <EditMeeting />
        },
        {
          path: "/api/teacher/courses/enrolledMembers",
          element: <EnrolledMembers />
        },
        {
          path: "/api/teacher/courses/rewards",
          element: <RewardsPage />
        },
        {
          path: "/api/teacher/courses/badges",
          element : <BadgePage/>
        },
        {
          path : "/api/teacher/courses/profile",
          element : <CommonProfile/>
        }
      ],
    errorElement: <ErrorPage />

  },
  {

    path: "/api/student",
    element: <Header/>,
    children : [{
      path: "/api/student",
      element: <Homepage />
    }]

  },
  {

    path: "/api/student/courses",
    element: <Header/>,
    children : [{
      path: "/api/student/courses",
      element: <Homepage />
    }]

  },
  {
    path: "/api/student/courses/enrolledMeetings",
    element: <Header/>,
    children : [{
      path: "/api/student/courses/enrolledMeetings",
      element: <Homepage />
    }]
  },
  {
    path: "/api/student/courses/enrolledMeetings/unregister/:id/:meetingId",
    element: <Header/>,
    children : [{
      path: "/api/student/courses/enrolledMeetings/unregister/:id/:meetingId",
      element: <Homepage />
    }]
  },
  {

    path: "/api/student/courses/:courseTopic",
    element: <Header/>,
    children : [{
      path: "/api/student/courses/:courseTopic",
      element: <Homepage />
    }]

  },
  {

    path: "/api/student/courses/:courseTopic/:topic/upcomingMeetings",
    element: <Header/>,
    children : [{
      path: "/api/student/courses/:courseTopic/:topic/upcomingMeetings",
      element: <Homepage />
    }]

  },
  {

    path: "/api/student/courses/:courseTopic/:topic/upcomingMeetings/register/:meetingId",
    element: <Header/>,
    children : [{
      path: "/api/student/courses/:courseTopic/:topic/upcomingMeetings/register/:meetingId",
      element: <Homepage />
    }]

  }, 
   {
    path: "/api/student/courses/badges",
    element: <Header/>,
    children : [{
      path: "/api/student/courses/badges",
      element: <Homepage />
    }]
  },

    {
      path: "/api/student/courses/feedback",
      element: <Header/>,
      children : [{
        path: "/api/student/courses/feedback",
        element: <Homepage />
      }]
    },
    {
      path: "/api/student/courses/feedback/:id/:meetingId/:feedbackNumber",
      element: <Header/>,
      children : [{
        path: "/api/student/courses/feedback/:id/:meetingId/:feedbackNumber",
        element: <Homepage />
      }]
    },
    {
      path : "/api/student/courses/profile",
      element: <Header/>,
      children : [{
        path : "/api/student/courses/profile",
        element: <Homepage />
      }]
    },


])


const studentRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignupPage />,
  }
  ,{
    path : "/login",
    element : <LogininPage/>
  },
  {
    path: "/api/student",
    element: <Header />,
    children:
      [
        {

          path: "/api/student",
          element: <StudentHomepage />

        },
        {

          path: "/api/student/courses",
          element: <StudentCourseList />

        },
        {
          path: "/api/student/courses/enrolledMeetings",
          element: <EnrolledMeetingList />
        },
        {
          path: "/api/student/courses/enrolledMeetings/unregister/:id/:meetingId",
          element: <UnEnrollMeeting />
        },
        {

          path: "/api/student/courses/:courseTopic",
          element: <StudentSubTopicList />

        },
        {

          path: "/api/student/courses/:courseTopic/:topic/upcomingMeetings",
          element: <StudentMeetingsList />

        },
        {

          path: "/api/student/courses/:courseTopic/:topic/upcomingMeetings/register/:meetingId",
          element: <SelectedMeeting />

        },
        {
          path: "/api/student/courses/badges",
          element : <StudentBadgePage/>
        },
      
          {
            path: "/api/student/courses/feedback",
            element : <StudentFeedbackPage />
          },
          {
            path: "/api/student/courses/feedback/:id/:meetingId/:feedbackNumber",
            element : <MeetingFeedback />
          },
          {
            path : "/api/student/courses/profile",
            element : <CommonProfile/>
          }
        

      ],

    errorElement: <StudentErrorPage />
  },
  {
    path : "/api/teacher",
    element : <Header/>,
    children : [ {
      path : "/api/teacher",
      element : <StudentHomepage />
    }]
  },
  {

    path: "/api/teacher/courses",
    element: <Header />,
    children: [
      {
        path: "/api/teacher/courses",
        element: <StudentHomepage />,
      }
    ]

  },
  ,
  {

    path: "/api/teacher/courses/:courseTopic",
    element: <Header />,
    children: [
      {
        path: "/api/teacher/courses/:courseTopic",
        element: <StudentHomepage />,
      }
    ]

  },
  {

    path: "/api/teacher/courses/:courseTopic/:topic",
    element: <Header />,
    children: [
      {
        path: "/api/teacher/courses/:courseTopic/:topic",
        element: <StudentHomepage />,
      }
    ]

  },
  {

    path: "/api/teacher/courses/upcomingMeetings",
    element: <Header />,
    children: [
      {
        path: "/api/teacher/courses/upcomingMeetings",
        element: <StudentHomepage />,
      }
    ]

  },
  {

    path: "/api/teacher/courses/upcomingMeetings/editMeeting/:meetingId",
    element: <Header />,
    children: [
      {
        path: "/api/teacher/courses/upcomingMeetings/editMeeting/:meetingId",
        element: <StudentHomepage />,
      }
    ]

  },
  {

    path : "/api/teacher/courses/profile",
    element: <Header />,
    children: [
      {
        path : "/api/teacher/courses/profile",
        element: <StudentHomepage />,
      }
    ]

  },
])
let logoutTimer;

function App() {

  const { teacherRole } = Role()

  const {isLoggedIn,token,login,logout,tokenExpiration} = Auth()

  const [isCheckedAuth , setIsCheckedAuth] = useState(false)


  useEffect(() => {
     const storedData =  JSON.parse(localStorage.getItem("userData"))

     if(storedData && storedData.token ){
        login(storedData.userId, storedData.token )
     }
     setIsCheckedAuth(true)
  },[login])

  // useEffect(() => {

  //   if(token && tokenExpiration){
  //       logoutTimer = setTimeout(logout , new Date(tokenExpiration) - new Date() )
  //   }
  //   else{
  //     clearTimeout(logoutTimer)
  //   }

  // },[token,logout])

  return (
       isCheckedAuth ?
      <RouterProvider router={ teacherRole ? teacherRouter : studentRouter } />
      : 
     " Re-Loading ...."
     

  );
}


export default App;
