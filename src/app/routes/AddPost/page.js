import React from 'react';
import AddJobPostForm from './addjobform';
import HeaderTem from "../../components/Header/Header";
import CustomFooter from "../../components/footer/footer";

export default function AddPostPage() {
  const handleAddJobPost = (formData) => {
    // Define the logic to handle adding job posts
    console.log('Adding job post with data:', formData);
  };

  return (
    <>
      <HeaderTem />
      <div>
        <AddJobPostForm />
      </div>
      <CustomFooter />
    </>
  );
}
