import React, { useState } from "react";

const Create = ({user, setPage, setContentId}) => {  //probably need to pass user to the new post so that we can populate the body of the 
                        //request with the userId to track post owner

    const API_URL = 'http://3.90.140.106:8000/api/blogPost'

    // const thing = process.env.REACT_APP_BASE_URL;
    // console.log(thing)
       

    const [newPost, setNewPost] = useState({ //default state on page load
        subjectLine: '',
        companyName: '', 
        jobTitle: '', 
        status: 1, 
        jobLink: '', 
        description: '',
        userID: user,
        comments: null,
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
            console.log(newPost);
            
            let res = await fetch(API_URL, { //Post on Submit
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost) //send new post in JSON format
            });

            if (res.ok) {
                let createdPost = await res.json(); 
                console.log('Post successful:', createdPost);

                //We could clear the form and keep user on New post page. 
                //But we decided sending them back home was prettier.
                // setNewPost({ //clear the form after posting   
                //     subjectLine: '',
                //     companyName: '', 
                //     jobTitle: '', 
                //     status: '', 
                //     jobLink: '', 
                //     description: '',
                //     userID: user,
                //     comments: null,
                // });
                setContentId(createdPost.id);
                setPage('ViewPost');

            } else { //handle if res is bad.
                console.error('Failed to create post:', res.statusText);                
            }
        } catch (error) {
            console.error('There was an error creating the post:', error);            
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Post</h1>
            <div>
                <label>Subject:</label>
                <input
                    type="text"
                    name="subjectLine"
                    value={newPost.subjectLine}
                    onChange={handleFormChange}
                />
            </div>
            <div>
                <label>Company Name:</label>
                <input
                    type="text"
                    name="companyName"
                    value={newPost.companyName}
                    onChange={handleFormChange}
                />
            </div>
            <div>
                <label>Job Title:</label>
                <input
                    type="text"
                    name="jobTitle"
                    value={newPost.jobTitle}
                    onChange={handleFormChange}
                />
            </div>
            <div>
                <label>Status:</label>
                <select name="status" value={newPost.status} onChange={handleFormChange}>
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
                    value={newPost.jobLink}
                    onChange={handleFormChange}
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    name="description"
                    value={newPost.description}
                    onChange={handleFormChange}
                />
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
};

export default Create;