import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
    return(
        <div>
            <h1>Custom React !</h1>
        </div>
    )
}

// const ReactElement = {
//     type: "a",
//     props:{
//         href: "https://www.google.com",
//         target: "_blank",
        
//     },
//     children: "Click me to visit google"
    
// }

const anotherElement =(
    <a href="https://www.google.com" targe='_blank'>Visit Google</a>
)

const anotherUser = "Archa"

const reactElement= React.createElement(
    'a',
    {
        href: "https://www.google.com",
        target: "_blank"
    },
    "Click me to Visit Google",
    anotherUser
)

createRoot(document.getElementById('root')).render(

    //<App />
    //<MyApp />

    //ReactElement
    reactElement
)
