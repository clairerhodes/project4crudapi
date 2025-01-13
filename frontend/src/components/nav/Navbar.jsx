
const Navbar = ({handleNav}) => {
    return (
        <nav>
            <button onClick={handleNav("home")}>Home</button>
            <button onClick={handleNav("create")}>New Post</button>
            <button onClick={handleNav} value="profile">My Profile</button>
            <button onClick={handleNav} value="login">Log In</button>
            {/* <button onClick={handleSection} value="logout">Log Out</button> */}
        </nav>
    );
};

export default Navbar;

// view own User
// view other users
// new post
// view post
// update/delete post