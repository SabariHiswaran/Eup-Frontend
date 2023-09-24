
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


const teacherRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignupPage />,
  }
  ,
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
          path: "/api/teacher/courses/upcomingMeetings/editMeeting/:meetingId",
          element: <EditMeeting />
        },
        {
          path: "/api/teacher/courses/enrolledMembers",
          element: <EnrolledMembers />
        }
      ],
    errorElement: <ErrorPage />

  }

])


const studentRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignupPage />,
  }
  ,
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

      ],

    errorElement: <StudentErrorPage />
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
])

function App() {

  const { teacherRole } = Role()


  return (
    <>
      <RouterProvider router={teacherRole ? teacherRouter : studentRouter} />

    </>

  );
}


export default App;
