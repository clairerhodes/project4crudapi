import { useState } from 'react'
import './App.css'
import Home from './components/home/home.jsx'
// need to import authentication, 

const App = () => {
  // state variables
  const [page, setPage] = useState("Home");
  const [content, setContent] = useState([]);
  
  // function to update page state
  const setPage = (event) => {
    setPage(event.target.value);
  };

  return (
    <>
      <Navbar setPage={setPage} />
      {/* default show home page */}
        {page === 'Home' ? <Home content={content} setContent={setContent}/> : ''}
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
