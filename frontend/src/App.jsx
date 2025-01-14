import { useState } from 'react'
import './App.css'
import Home from './components/home/Home.jsx';
import Navbar from './components/nav/Navbar.jsx';
// import Footer from './components/footer/Footer.jsx';
import Profile from './components/profile/ViewProfile.jsx';
import Create from './components/posts/Create.jsx';
import EditPost from './components/posts/EditPost.jsx';
import ViewPost from './components/posts/ViewPost.jsx';

// need to import authentication, 

const App = () => {
  // state variables
  const [page, setPage] = useState("Home");
  const [content, setContent] = useState([]);
  const [user, setUser] = useState(1);
  const [contentId, setContentId] = useState(null);
  // const [mode, setMode] = useState('dark')
  
  // //function to update mode
  // const handleMode = (modeValue) => {
  //   console.log(modeValue)
  //   setMode(modeValue)
  // }
  
  // function to update page state
  const handleSection = (event) => {
    setPage(event.target.value);
  };

  return (
    <>
      <div>
        <Navbar handleSection={handleSection} />
        {/* default show home page */}
          {page === 'Home' ? <Home content={content} setContent={setContent} setContentId={setContentId} setPage={setPage}/> : ''}
          {/* {page === 'Home' ? <Home/> : ''} */}
        {/* user profile section */}
          {/* do we also want to have page that shows a list of users to click? or just ability to click on a user through their post */}
          {page === "ViewProfile" ? <Profile user={user} setContent={setContent}/> : ''}
        {/* post section */}
          {page === "Create" ? <Create user={user} setPage={setPage}/> : ''}
          {page === "ViewPost" ? <ViewPost contentId={contentId} setPage={setPage} setContentId={setContentId}/> : ''}
          {page === "EditPost" ? <EditPost contentId={contentId} setPage={setPage} setContentId={setContentId}/> : ''}
          
        {/* authentication section */}
          {/* {page === "login" ? <LogIn user={user} setUser={setUser}/> : ''} */}
          {/* {page === "signup" ? <SignUp setUser={setUser} /> : ''} */}
          {/* <Footer /> */}
      </div>
      {/* <div>
          <button onClick={() => handleMode("light")}>Light Mode</button>
          <button onClick={() => handleMode("dark")}>Dark Mode</button>
          <button onClick={() => handleMode("neon")}>Neon Mode</button>
          <button onClick={() => handleMode("night")}>Night Mode</button>        
      </div> */}
    </>
  );
};

export default App;