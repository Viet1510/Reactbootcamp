import { Footer } from "../Components/Functional/Footer"
import { HeadSection } from "../Components/Functional/HeaderSection"
import {NavBar } from "../Components/Functional/Nav"
import { SignUp } from "../Components/Functional/SinghUpSection"
import { ReadMore } from "../Components/Functional/ReadMoreSection"
import { LearnFundamental } from "../Components/Functional/LearnFundamentalSection"
import { LearnReact } from "../Components/Functional/LearnReactSection"
// import { Questions } from "../Components/Functional/QuestionsSection"
import Questions from "../Components/Functional/QuestionsSection"
import { Instructors } from "../Components/Functional/Instructors"
import { ContactInfo } from "../Components/Functional/ContactInfoSection"
import { SimpleRef } from "../Components/Functional/component"
import { useEffect, useState } from "react"

export const Home=()=>{

    const baseUrl="http://localhost:8080"
    // we can build this from an API coming from spring boot
    // .then((response.json())=>{
    //     console.log("Menu Settings from API ", response)
    //     response?.map((item)=>{
    //         setMenuItems(...menuItems,{text:item.menuText,href:item.href}) 
    //     })            
    // })
    // now we have assumes that we are getting this data from API

    const [menuItems,setMenuItems] = useState()

    async function callMenuData(){
        
    }


    // const menuItems=[
    //     {text:"What You'll Learn",href:"/whatYouWill"},
    //     {text:"Home", href:"/home"},
    //     {text:"Contact",href:"/contact"},
    //     {text:"Abou Us",href:"/about"}, 
    // ]

    const items=[
        {header:"React Js",body:"React Js  A common task for a web server can be to open a file on the server and return the content to the client. Here is how PHP or ASP handles a file request: Sends the task to the computer's file system. Waits while the file system opens and reads the file. Returns the content to the client. Ready to handle the next request. Here is how Node.js handles a file request: Sends the task to the computer's file system. Ready to handle the next request.When the file system has opened and read the file, the server returns the content to the client. Node.js eliminates  The waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient."},
        {header:"Java",body:" Java A common task for a web server can be to open a file on the server and return the content to the client. Here is how PHP or ASP handles a file request: Sends the task to the computer's file system. Waits while the file system opens and reads the file. Returns the content to the client. Ready to handle the next request. Here is how Node.js handles a file request: Sends the task to the computer's file system. Ready to handle the next request.When the file system has opened and read the file, the server returns the content to the client. Node.js eliminates  The waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient."},
        {header:"Vanilla Js",body:" Vanilla   A common task for a web server can be to open a file on the server and return the content to the client. Here is how PHP or ASP handles a file request: Sends the task to the computer's file system. Waits while the file system opens and reads the file. Returns the content to the client. Ready to handle the next request. Here is how Node.js handles a file request: Sends the task to the computer's file system. Ready to handle the next request.When the file system has opened and read the file, the server returns the content to the client. Node.js eliminates  The waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient."},
        {header:"Node Js",body:"Nonde Js A common task for a web server can be to open a file on the server and return the content to the client. Here is how PHP or ASP handles a file request: Sends the task to the computer's file system. Waits while the file system opens and reads the file. Returns the content to the client. Ready to handle the next request. Here is how Node.js handles a file request: Sends the task to the computer's file system. Ready to handle the next request.When the file system has opened and read the file, the server returns the content to the client. Node.js eliminates  The waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient."},
        {header:"Express",body:" Express JS Java A common task for a web server can be to open a file on the server and return the content to the client. Here is how PHP or ASP handles a file request: Sends the task to the computer's file system. Waits while the file system opens and reads the file. Returns the content to the client. Ready to handle the next request. Here is how Node.js handles a file request: Sends the task to the computer's file system. Ready to handle the next request.When the file system has opened and read the file, the server returns the content to the client. Node.js eliminates  The waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient."}
    ]

    const itemEvent=(e)=>{
        alert(e.target.id + "Was clicked");
    }
   
/* 
    const instructors=[
        {profile:"",name:""}
    ] */


    return(
        <>
            <div>

                <NavBar items={menuItems}></NavBar>
                <HeadSection></HeadSection>
                <SignUp></SignUp>
                <ReadMore></ReadMore>
                <LearnFundamental></LearnFundamental>
                <LearnReact></LearnReact>
                <Questions items={items} itemEvent={itemEvent}></Questions>
                <Instructors></Instructors>
                <ContactInfo></ContactInfo>  
                <Footer></Footer>
                <SimpleRef></SimpleRef>

            </div>
        </>
    )
}