"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderTem from "../../components/Header/Header";
import CustomFooter from "../../components/footer/footer";
import JobPost from '../../components/jobposttemplate/jobpost';
import { useRouter } from 'next/navigation';
import useAuth from '../../hooks/useAuth';
import "./posts.css"



function PostPage() {
  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading state
  const {auth}=useAuth();

  const router = useRouter();

  useEffect(() => {
    // Fetch job posts when component mounts
    fetchJobPosts();
  }, []);

  const fetchJobPosts = async () => {
    try {
      const response = await axios.get(`https://alumni-backend-yqo6.onrender.com/postlists`);
      const reversedPosts = response.data.reverse();
      setJobPosts(reversedPosts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching job posts:', error);
      setLoading(false);
    }
  };

  const onClickfunction = () => {
    router.push("/routes/AddPost");
  }

  

  return (
    <>
      <HeaderTem />
      {auth ? (<div className='MainContainer'> 
      <div className="contentContainer">
      <div className="addJobButton">
        <button onClick={onClickfunction}>ADD POST</button>
      </div>
        <div className="jobFeed">
          {loading ? (
            <p>Loading job posts...</p>
          ) : (  
            jobPosts.map((job, index) => (
              <JobPost key={index} jobDetails={job} className="jobPost"/>
            ))
          )}
        </div>
      </div>
      </div>
      ) : (
        <div className="login-message">
            <p>You need to login first to access this page!</p>
            <a href="/routes/login">
                <button>Login</button>
            </a>
        </div>
    )}
    <CustomFooter className="CustomFooter" />
    </>
  );
}

export default PostPage;