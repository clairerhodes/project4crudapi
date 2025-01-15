import {useState, useEffect} from "react";

const ViewPost = ({contentId, setPage, setContentId}) => {

    // const BASE_URL = `${import.meta.env.BASE_URL}`
    const BASE_URL = 'http://3.90.140.106:8000/api/blogPost'
    console.log('this is the base url');    
    console.log(BASE_URL);
    
    const statusDescription = {
        1: " Waiting for response",
        2: "Interview scheduled",
        3: "Follow up interview",
        4: "Hired",
        5: "Not hired"
      };

    const [post, setPost] = useState({
        subjectLine: "",
        companyName: "",
        jobTitle: "",
        jobLink: "",
        jobStatus: "",
        description: "",
        userID: "",
        comments: [],
    });

    useEffect(() => {
        const getPostData = async () => {
            try {
                // const res = await fetch(BASE_URL);
                const res = await fetch(`${BASE_URL}/${contentId}`)
                let JSONdata = await res.json();
                console.log(JSONdata)
                setPost(JSONdata);
            } catch (err) {
                console.log(err);
            };
        };
        getPostData();
    }, []);

    const handleEdit = (id => {
        setContentId(id) //grabs content 'id'
        setPage('EditPost')
    })

    const goHome = (e => {
        setPage(e)
    })

    return (
        <>
            <div>
                <li>
                    <h1>{post.subjectLine}</h1>
                    <h6>By {post.userID}</h6>
                    <h2>{post.jobTitle} at {post.companyName}</h2>
                    <h4>Job link: {post.jobLink}</h4>
                    <h4>Job status: {statusDescription[post.status]}</h4>
                    <p>{post.description}</p>
                    <p>{post.comments}</p>
                </li>
            </div>
            <div>
            {/* add buttons */}
                <button onClick={ () => handleEdit(post.id)} value="EditPost">Edit</button>
                <button onClick={ () => goHome("Home")}  value="Home">Back Home</button>
            </div>
        </>
    )
}

export default ViewPost;