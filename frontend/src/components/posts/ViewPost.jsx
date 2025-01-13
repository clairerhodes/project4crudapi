
import {useState, useEffect} from "react";

const ViewPost = (props, {handleSection}) => {

    const BASE_URL = `${import.meta.env.BASE_URL}`
    console.log('this is the base url');    
    console.log(BASE_URL);
    

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

    useEffect(() => {
        const getPostData = async () => {
            try {
                const res = await fetch(BASE_URL);
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
                    <h1>{props.content.subjectLine}</h1>
                    <h6>By {props.content.userID}</h6>
                    <h2>{props.content.jobTitle} at {post.companyName}</h2>
                    <h4>Job link: {props.content.jobLink}</h4>
                    <h4>Job status: {props.content.jobLink}</h4>
                    <p>{props.content.description}</p>
                    <p>{props.content.comments}</p>
                </li>
            </div>
            <div>
            {/* add buttons */}
                <button onClick={handleSection} value="update">Edit</button>
                <button onClick={handleSection} value="home">Back Home</button>
            </div>
        </>
    )
}

export default ViewPost;