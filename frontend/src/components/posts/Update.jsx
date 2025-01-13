
import {useState, useEffect} from "react";

const Update = ({contentId, setPage}) => {

    const [content, setContent] = useState(null);

    //const BASE_URL = 'http://3.90.140.106:8000/api/blogPost/' //swap out with test
    //let API_URL =(`${BASE_URL}/${contentId}`) 
    // let API_URL = 'http://3.90.140.106:8000/api/blogPost/3'
    let API_URL = `${import.meta.env.BASE_URL}/3`


    const userId = 1 //demonstration, not used currently
    //In theory unnecessary since we will only be allowing users to get to this page if they own the post,
    //but any old bad actor could maybe find a way around it?  IDK right now, doesn't matter.

    useEffect(() => { //Gets original post data
        const fetchContent = async () => {
            try {
                let res = await fetch(API_URL); //fetch post data
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
            let res = await fetch(API_URL, { //Update on Submit
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
                setPage('viewPost')//view the post after we have updated it.
            } else { //handle if res is bad.
                console.error('Failed to update post:', res.statusText);                
            }
        } catch (error) {
            console.error('There was an error updating the post:', error);            
        }
    };

    const handleDelete = async () => {
        try {
            let res = await fetch(API_URL, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.ok) {
                console.log('Post deleted successfully');
                //redirect user using setPage?
                setContent(null); //hide form for now.  Won't matter once we are redirecting.                
                setPage('home') //go home after deleting, possibly to profile?
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
                // add update and delete buttons
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
                <input
                    type="number"
                    name="status"
                    value={content.status}
                    onChange={handleFormChange}
                />
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
            <button type="submit">Update Post</button>
            <button type="button" onClick={handleDelete}>Delete Post</button>
        </form>

    );
};

export default Update;



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





