// import Navbar from '../nav/Navbar.jsx';
import '../../App.css';
import { useEffect, useState} from 'react';

const Home = ({content = [], setContent, setContentId, setPage}) => {

    const BASE_URL = 'http://127.0.0.1:8000/api/blogPost';

    const handleShow = (id => {
        setContentId(id) //grabs content 'id'
        setPage('ViewPost')
    })

    const statusDescription = {
        1: " Waiting for response",
        2: "Interview scheduled",
        3: "Follow up interview",
        4: "Hired",
        5: "Not hired"
      };
     

    useEffect(() => {
        const fetchContent = async () => {
            try {
                let res = await fetch(BASE_URL); // get user posts
                let JSONdata = await res.json();
                console.log(JSONdata);

                if (Array.isArray(JSONdata)) {
                    setContent(JSONdata);
                } else {
                    console.error('This is not an array: ', JSONdata);
                }
            } catch (error) {
                console.error('There was an error fetching data', error);
            };
        };
        fetchContent();
    }, []);
    console.log('Content:', content);
    return (
        <>
                <div>
                    {/* div for logo, navbar, user profile */}
                    {/* <img src=""> logo */}
                    {/* user profile - picture, name, and username */}
                </div>
                <div>
                    {/* div for new post OR search bar, showing posts, and footer */}
                    {/* new post (click to show form) or search bar? */}
                    <ul>
                        {content.map((post, index) => (
                            <div className="postContainer" key={index}>
                                <li>
                                    <h1 className="subjectLine" onClick={ () => handleShow(post.id)}>{post.subjectLine}</h1>
                                    <h4>Created by: {post.userID}</h4>
                                    <h2>{post.jobTitle} at {post.companyName}</h2>
                                    <h4>Job link: {post.jobLink}</h4>
                                    <h4>Job status: {statusDescription[post.status]}</h4>
                                    {/* <h4>Details:</h4> */}
                                    <p>{post.description}</p>
                                    <p>{post.comments}</p>
                                </li>
                            </div>
                        ))}
                    </ul>
                    {/* <Footer /> */}
                </div>
        </>
    );
};

export default Home;