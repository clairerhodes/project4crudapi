
const Navbar = ({handleSection}) => {
    return (
        <nav>
            <button onClick={handleSection} value="Home">Home</button>
            <button onClick={handleSection} value="newPost">New Post</button>
            <button onClick={handleSection} value="profile">My Profile</button>
            <button onClick={handleSection} value="logOut">Log Out</button>
        </nav>
    );
};

export default Navbar;

// view own User
// view other users
// new post
// view post
// update/delete post