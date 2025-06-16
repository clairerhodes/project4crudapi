import {useState, useEffect} from "react";
import './ViewPost.css';

const ViewPost = ({contentId, setPage, setContentId}) => {

    // const BASE_URL = `${import.meta.env.BASE_URL}`
    const BASE_URL = 'http://127.0.0.1:8000/api/blogPost';
    console.log('this is the base url');    
    console.log(BASE_URL);
    
    const handleEdit = (id => {
        setContentId(id) //grabs content 'id'
        setPage('EditPost')
    })

    const handleDelete = async () => {
    try {
        const res = await fetch(`${BASE_URL}/${contentId}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            setPage('Home'); // Go back home after delete
        } else {
            console.log('Failed to delete post');
        }
    } catch (err) {
        console.log(err);
    }
};

    const goHome = (e => {
        setPage(e)
    })

    const [post, setPost] = useState({
        subjectLine: "",
        companyName: "",
        jobTitle: "",
        status: "",
        jobLink: "",
        description: "",
        userID: "",
        comments: [],
    });

    const statusDescription = {
        1: " Waiting for response",
        2: "Interview scheduled",
        3: "Follow up interview",
        4: "Hired",
        5: "Not hired"
      };


    useEffect(() => {
        const getPostData = async () => {
            try {
                // const res = await fetch(BASE_URL);
                const res = await fetch(`${BASE_URL}/${contentId}`)
                let JSONdata = await res.json();
                setPost(JSONdata);
            } catch (err) {
                console.log(err);
            };
        };
        getPostData();
    }, []);


   return (
    <>
        <div>
            <li>
                <h1>{post.subjectLine}</h1>
                <h4>By {post.userID}</h4>
                <h2>{post.jobTitle} at {post.companyName}</h2>
                <h4>Job link: {post.jobLink}</h4>
                <h4>Job status: {statusDescription[post.status]}</h4>
                <p>{post.description}</p>
                <p>{post.comments}</p>
            </li>
        </div>
        <div>
            <div className="button-row">
                <button onClick={() => handleEdit(post.id)} value="EditPost">Edit</button>
                <button onClick={() => goHome("Home")} value="Home">Back Home</button>
            </div>
            <button onClick={handleDelete} className="delete-btn">Delete</button>
        </div>
    </>
)
}

export default ViewPost;