import { Footer } from "../Components/Functional/Footer"
import { HeadSection } from "../Components/Functional/HeaderSection"
import {NavBar } from "../Components/Functional/Nav"
import { SignUp } from "../Components/Functional/SinghUpSection"
import { ReadMore } from "../Components/Functional/ReadMoreSection"
import { LearnFundamental } from "../Components/Functional/LearnFundamentalSection"
import { LearnReact } from "../Components/Functional/LearnReactSection"
import { Questions } from "../Components/Functional/QuestionsSection"
import { Instructors } from "../Components/Functional/Instructors"
import { ContactInfo } from "../Components/Functional/ContactInfoSection"
import { SimpleRef } from "../Components/Functional/component"

export const Home=()=>{

    // we can build this from an API coming from spring boot
    // now we have assumes that we are getting this data from API
    const menuItems=[
        {text:"What You'll Learn",href:"/whatYouWill"},
        {text:"Home", href:"/home"},
        {text:"Contact",href:"/contact"},
        {text:"Abou Us",href:"/about"}, 
    ]
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
                <Questions></Questions>
                <Instructors></Instructors>
                <ContactInfo></ContactInfo>  
                <Footer></Footer>
                <SimpleRef></SimpleRef>

            </div>
        </>
    )
}