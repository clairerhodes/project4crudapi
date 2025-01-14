import { useState } from 'react'
import './App.css'
import Home from './components/home/Home.jsx'
import Navbar from './components/nav/Navbar.jsx';
// need to import authentication, 

const App = () => {
  // state variables
  const [page, setPage] = useState("Home");
  const [content, setContent] = useState([]);
  const [user, setUser] = useState(null);
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
        {page === "profile" ? <Profile /> : ""}
      {/* post section */}
        {page === "viewPost" ? <ViewPost /> : ""}
        
      {/* authentication section */}
        {page === "login" ? <LogIn /> : ""}
        {page === "signup" ? <SignUp /> : ""}
    </>
  );
};

export default App;
