
import React from 'react'

function RandomWelcome() {

    const WelcomeMsgs = ["What's the plan for today?", "Life is too short, let's Schedule!", "What's on your mind?", "Any upcoming plan?" ];

const msgSelector = WelcomeMsgs.length - 1;
const windex = Math.floor(Math.random() * msgSelector);



  return (
 <h1 className='Welcoming'>{WelcomeMsgs[windex]}</h1>
  )
}

export default RandomWelcome

