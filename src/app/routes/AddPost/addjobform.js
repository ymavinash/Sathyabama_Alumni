"use client";
import React, { useState } from 'react';
import "./addjobform.css";
import { useRouter } from "next/navigation";
import axios from 'axios';

export default function AddJobPostForm() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [datePosted, setDatePosted] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      email,
      datePosted
    };

    axios.post('https://alumni-backend-yqo6.onrender.com/addposts', formData)
      .then(response => {
        alert(`Response from backend: ${JSON.stringify(response.data)}`);
        setTitle('');
        setDescription('');
        setEmail('');
        setDatePosted('');
        router.push('./Posts');
      })
      .catch(error => {
        console.error('Error adding job post:', error);
      });
  };

  return (
    <div className="addJobPostForm">
      <h2>Add New Job Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Job Description"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Mail Id"
        />
        <input
          type="date"
          value={datePosted}
          onChange={(e) => setDatePosted(e.target.value)}
          placeholder="Date Posted"
          required
        />
        <button type="submit">Add Job Post</button>
      </form>
    </div>
  );
}
