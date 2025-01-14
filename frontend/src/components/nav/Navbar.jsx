
const Navbar = ({handleSection}) => {
    return (
        <nav>
            <button onClick={handleSection} value="Home">Home</button>
            <button onClick={handleSection} value="Create">New Post</button>
            <button onClick={handleSection} value="ViewProfile">My Profile</button>
            {/* <button onClick={handleSection} value="logout">Log Out</button> */}
            {/* <button onClick={handleSection} value="login">Log In</button> */}
        </nav>
    );
};

export default Navbar;

// view own User
// view other users
// new post
// view post
// update/delete post