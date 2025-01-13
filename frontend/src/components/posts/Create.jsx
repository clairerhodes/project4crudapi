import { useState } from "react";

const Create = () => {  //probably need to pass user to the new post so that we can populate the body of the 
                        //request with the userId to track post owner

    const API_URL = `${import.meta.env.BASE_URL}`   

    const [newPost, setNewPost] = useState({ //default state on page load
        subjectLine: '',
        companyName: '', 
        jobTitle: '', 
        status: '', 
        jobLink: '', 
        description: '',
    });

    const handleFormChange = (e) => { //Update to show what user types
        const {name,value} = e.target;
        setNewPost({
            ...newPost,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); //Stops the submit button's native feature of refreshing the page.

        try {
            let res = await fetch(API_URL, { //Update on Submit
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost) //send new post in JSON format
            });

            if (res.ok) {
                let createdPost = await res.json(); 
                console.log('Post successful:', createdPost);
                setNewPost({ //clear the form after posting   
                    subjectLine: '',
                    companyName: '', 
                    jobTitle: '', 
                    status: '', 
                    jobLink: '', 
                    description: '',
                });           
            } else { //handle if res is bad.
                console.error('Failed to create post:', res.statusText);                
            }
        } catch (error) {
            console.error('There was an error creating the post:', error);            
        }
    };

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
            <button type="submit">Create Post</button>
        </form>
    );
};

export default Create;