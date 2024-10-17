import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import "./jobpoststyles.css";

function JobPost({jobDetails}) {
  const isActive = new Date() - new Date(jobDetails.datePosted) < 30 * 24 * 60 * 60 * 1000;
  const onApply = (jobTitle) => {
    // Handle the apply functionality here, e.g., open a modal, send a request to the server, etc.
    console.log(`Applying to job with title: ${jobTitle}`);
  };

  return (
    <div classname="Bg">
    <div className="post">
      <h3>{jobDetails.title}</h3>
      <hr/>
      <p className="postDescription"><span>Description: </span> {jobDetails.description}</p>
      <p className="postMail">
        <FontAwesomeIcon icon={faEnvelope} /><span> Email: </span>{jobDetails.email}
      </p>
      <p>
        <FontAwesomeIcon icon={faCalendarAlt} /> <span>Posted Date: </span>{jobDetails.datePosted}
      </p>
      <button disabled={!isActive} onClick={() => onApply(jobDetails.title)}>
         {isActive ? 'Apply Now' : 'Application Closed'}
      </button>
      {/* Remove the button for applying to the job */}
    </div>
    </div>
  );
}

export default JobPost;
