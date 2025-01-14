import { useState } from 'react'
import './App.css'
import Home from './components/home/Home.jsx'
import Navbar from './components/nav/Navbar.jsx';
// import Footer from './components/footer/Footer.jsx';
import Profile from './components/profile/ViewProfile.jsx';
import Create from './components/posts/Create.jsx';
import Update from './components/posts/EditPost.jsx';
import ViewPost from './components/posts/ViewPost.jsx';

// need to import authentication, 

const App = () => {
  // state variables
  const [page, setPage] = useState("Home");
  const [content, setContent] = useState([]);
  const [user, setUser] = useState(1);
  const [contentId, setContentId] = useState(null);
  
  // function to update page state
  const handleSection = (event) => {
    setPage(event.target.value);
  };

  return (
    <>
      <Navbar handleSection={handleSection} />
      {/* default show home page */}
        {page === 'Home' ? <Home content={content} setContent={setContent}/> : ''}
        {/* {page === 'Home' ? <Home/> : ''} */}
      {/* user profile section */}
        {/* do we also want to have page that shows a list of users to click? or just ability to click on a user through their post */}
        {page === "ViewProfile" ? <Profile user={user} setContent={setContent}/> : ''}
      {/* post section */}
        {page === "Create" ? <Create user={user} setPage={setPage}/> : ''}
        {page === "ViewPost" ? <ViewPost content={content}/> : ''}
        {page === "EditPost" ? <Update contentId={contentId} setPage={setPage}/> : ''}
        
      {/* authentication section */}
        {/* {page === "login" ? <LogIn user={user} setUser={setUser}/> : ''} */}
        {/* {page === "signup" ? <SignUp setUser={setUser} /> : ''} */}
        {/* <Footer /> */}
    </>
  );
};

export default App;