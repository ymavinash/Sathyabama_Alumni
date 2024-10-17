// useAuth.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');
  const [registernumber, setregisternumber] = useState('');
  const [profilepic, setprofilepic] = useState('');
  const [designation, setdesignation] = useState('');

  useEffect(() => {
    const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='));
    if (token) {
      // Check token validity with backend
      axios.post('https://alumni-backend-yqo6.onrender.com/validatetoken', { token })
      .then(res => {
        if (res.data.Status === "Token Valid") {
          setAuth(true);
          setName(res.data.name);
          setregisternumber(res.data.registerNumber)
          setprofilepic(res.data.profilepic)
          setdesignation(res.data.designation)
        } else {  
          setAuth(false);
          alert("Token Invalid")
        }
      })
      .catch(error => {
        console.error('Error validating token:', error);
        setAuth(false);
      });
    } else {
      setAuth(false);
    }
  }, []);

  return { auth , name, registernumber, profilepic, designation};
}
