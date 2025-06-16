import {useState, useEffect} from "react";
import './EditPost.css';

const EditPost = ({contentId, setPage, setContentId}) => {

    const [content, setContent] = useState(null);

    //const BASE_URL = 'http://3.90.140.106:8000/api/blogPost/' //swap out with test
    //let API_URL =(`${BASE_URL}/${contentId}`) 
    // let API_URL = 'http://3.90.140.106:8000/api/blogPost/3'
    // let API_URL = `${import.meta.env.BASE_URL}/3`
    const BASE_URL = 'http://127.0.0.1:8000/api/blogPost';
    console.log('this is the base url');    
    console.log(BASE_URL);


    const userId = 1 //demonstration, not used currently
    //In theory unnecessary since we will only be allowing users to get to this page if they own the post.

    useEffect(() => { //Gets original post data
        const fetchContent = async () => {
            try {
                let res = await fetch(`${BASE_URL}/${contentId}`); //fetch post data
                //let res = await fetch(`${API_URL}/${contentId}`) //swap out with test  //Dont need this because we are just going to set API_URL for the post above.
                let JSONdata = await res.json(); //parse as JSONdata
                console.log('JSON Data below');
                console.log(JSONdata);
                setContent(JSONdata); //update Content state with our data
                
            } catch (error) {
                console.error('There was an error fetching the post', error);
                
            };
        };
        fetchContent(); //call the function we wrote
    }, [contentId]); //This is a dependency array.  Essentially re-runs the useEffect if contentId were to change

    const handleFormChange = (e) => { //Update to show what user enters.
        const {name, value} = e.target;
        setContent({
            ...content,
            [name]: value,

        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); //this stops the form from loading the initialPost every
                            //time the user inputs anything.
        try {
            fetch(`${BASE_URL}/${contentId}`)
            let res = await fetch(`${BASE_URL}/${contentId}`, { //Update on Submit
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(content) //send updated info in JSON format
            });

            if (res.ok) {
                let updatedContent = await res.json(); 
                console.log('Content update successful:', updatedContent);
                setContent(updatedContent) //update useState with updated Content data    
                setContentId(updatedContent.id)            
                setPage('ViewPost')//view the post after we have updated it.
            } else { //handle if res is bad.
                console.error('Failed to update post:', res.statusText);                
            }
        } catch (error) {
            console.error('There was an error updating the post:', error);            
        }
    };

    const handleDelete = async () => {
        try {
            let res = await fetch(`${BASE_URL}/${contentId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.ok) {
                console.log('Post deleted successfully');
                //redirect user using setPage?
                setContent(null); //hide form for now.  Won't matter once we are redirecting.                
                setPage('Home') //go home after deleting, possibly to profile?
            } else {
                console.error('Failed to delete: ', res.statusText);                
            }            
        } catch (error) {
            console.error('There was an error deleting the post:', error);            
        }
    };

    if (!content) { //Show while content is loading
        return <div>Loading post...</div>;
    }


    return (
    <form onSubmit={handleSubmit}>
        <h1>Update Post</h1>
        <div>
            <label>Subject:</label>
            <input
                type="text"
                name="subjectLine"
                value={content.subjectLine}
                onChange={handleFormChange}
            />
        </div>
        <div>
            <label>Company Name:</label>
            <input
                type="text"
                name="companyName"
                value={content.companyName}
                onChange={handleFormChange}
            />
        </div>
        <div>
            <label>Job Title:</label>
            <input
                type="text"
                name="jobTitle"
                value={content.jobTitle}
                onChange={handleFormChange}
            />
        </div>
        <div>
            <label>Status:</label>
            <select
                name="status"
                value={content.status}
                onChange={handleFormChange}
            >
                <option value="1">Waiting for response</option>
                <option value="2">Interview scheduled</option>
                <option value="3">Follow up interview</option>
                <option value="4">Hired</option>
                <option value="5">Not hired</option>
            </select>
        </div>
        <div>
            <label>Job Link:</label>
            <input
                type="text"
                name="jobLink"
                value={content.jobLink}
                onChange={handleFormChange}
            />
        </div>
        <div>
            <label>Description:</label>
            <input
                type="text"
                name="description"
                value={content.description}
                onChange={handleFormChange}
            />
        </div>
        <div className="button-row">
            <button type="submit">Update</button>
            <button
                type="button"
                onClick={handleDelete}
                className="delete-btn"
            >
                Delete
            </button>
            <button
                type="button"
                onClick={() => {
                    setPage('ViewPost');
                    setContentId(contentId);
                }}
            >
                Go Back
            </button>
        </div>
    </form>
);
};

export default EditPost;



//Graveyard



    // //fill the form with existing post info
    // const [form, setForm] = useState ({
    //     subjectLine: JSONdata?.subjectLine || '',
    //     companyName: JSONdata?.companyName || '',
    //     jobTitle: JSONdata?.jobTitle || '',
    //     status: JSONdata?.status || '',
    //     jobLink: JSONdata?.jobLink || '',
    //     description: JSONdata?.description || '',
    // });