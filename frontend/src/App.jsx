import { useState } from 'react'
import './App.css'
import Home from './components/home/Home.jsx'
import Navbar from './components/nav/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Profile from './components/profile/Profile.jsx';
import Create from './components/posts/Create.jsx';
import Update from './components/posts/Update.jsx';
import ViewPost from './components/posts/ViewPost.jsx';

// need to import authentication, 

const App = () => {
  // state variables
  const [page, setPage] = useState("home");
  const [content, setContent] = useState([]);
  const [user, setUser] = useState(null);
  const [contentId, setContentId] = useState(null);

  
  // function to update page state
  const handleNav = (event) => {
    console.log(event);
    setPage(event);
  };

  return (
    <>
      <Navbar handleNav={handleNav} user={user}/>
      <br></br>
      <br></br>
      {/* default show home page */}
        {page === 'home' ? <Home content={content} setContent={setContent}/> : ''}
      {/* user profile section */}
        {/* do we also want to have page that shows a list of users to click? or just ability to click on a user through their post */}
        {page === "profile" ? <Profile user={user} setContent={setContent}/> : ''}
      {/* post section */}
        {page === "create" ? <Create user={user} setPage={setPage}/> : ''}
        {page === "viewPost" ? <ViewPost content={content}/> : ''}
        {page === "update" ? <Update contentId={contentId} setPage={setPage}/> : ''}
        
      {/* authentication section */}
        {/* {page === "login" ? <LogIn user={user} setUser={setUser}/> : ''} */}
        {/* {page === "signup" ? <SignUp setUser={setUser} /> : ''} */}
        <Footer />
    </>
  );
};

export default App;
