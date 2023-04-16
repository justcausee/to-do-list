import React, { useState } from 'react'
import { Navigate } from 'react-router';

function Home() {

const[login] = useState(false);
const[create] = useState(false);

if (login){
  return <Navigate to="/login" />;
}
else if (create){
  return <Navigate to = "/register" />;
}

  return (
    <div className='home'>
    {/* <img className='my-image' src='/checklist.png' alt='checklist' />  CAN BE USED TO ADD PICS */} 
        <h1>Welcome to Task Master!</h1>
           <div className="mission">
            <h2> What is our mission?</h2>
                <p> We designed this website to help people stay focused on any task or goal you want to achieve. 
            We wanted a fun and easy way for you to keep track of your goals or just things that need to be done! 
            No more forgetting what you have to do each day, just create a task and we will save it for you and show when it 
            is completed or not!</p>
            </div>
            <div className='start'>
            <h2>How do you get started?</h2>
            <p>Super simple! Just click on "Register" to create an account and then you can start creating tasks!</p>
            </div>
    </div>
  )
}

export default Home;