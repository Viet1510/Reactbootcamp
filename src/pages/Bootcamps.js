


// we must have the capability to navigate between the pages or we must know how to assign URL routing in the react js 
import BootcampList  from "../Data/bootcamp.json"
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBar } from "../Components/Functional/Nav";
import { HeadSection } from "../Components/Functional/HeaderSection";
import { Footer } from "../Components/Functional/Footer";
import { Link, useParams } from "react-router-dom";

// Routing  
const Bootcamp = (props) => {
    const [bootcamp, setBootcamp] = useState(props)

    
    return (
        <Card style={{ width: bootcamp.width }} className="m-5">
            <Card.Img variant="top" src={bootcamp.imageSrc} />
            <Card.Body>
                <Card.Title>{bootcamp.title}</Card.Title>
                <Card.Text>
                    {bootcamp.body}
                </Card.Text>                
                <Link className="btn btn-warning position-absolute end-50" to={props.identifier} >Details</Link>
            </Card.Body>
        </Card>
    );
}
const baseUrl = "http://localhost:8080/api";
const Bootcamps = (props) => {


    const menuItems = [

        { text: "Home", href: "/" },
        { text: "Contact", href: "/contact" },
        { text: "About Us", href: "/about" },
        { text: "Bootcamps", href: "/bootcamps" },
    ]

    const [bootcamps, setBootcamps] = useState([])


    useEffect(() => {
        async function GetBootcamps() {
            try {
                const response = await fetch(baseUrl + "/bootcamps")
                let json = response.json()
                json
                    .then(data => {
                        setBootcamps(data.BootcampList)
                        console.log("All Data ", bootcamps)
                    })

            } catch (error) {
                
                console.log("Reading Bootcamp 1",BootcampList)
                setBootcamps(BootcampList.BootcampList)
            }
        }
        GetBootcamps() // IIF
    }, [])


    if (!bootcamps) return <>Loading ....</>
    return (
        <>
            <NavBar items={menuItems}></NavBar>
            <HeadSection></HeadSection>
            <BootCampSeaerchBar></BootCampSeaerchBar>
            <Container>
                <Row>
                    {
                        bootcamps.map((item) =>
                            <Col md={4} xs={12} sm={6}>
                                <Bootcamp className="col col-md-3" identifier={"/bootcamps/"+item.id} title={item.text} width={item.width} imageSrc={item.image} body={item.description} ></Bootcamp>
                            </Col>
                        )
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </>
    )
};
const BootCampSeaerchBar=()=>{
    return(
        <>
        <section class="bg-primary text-light p-5">
            <Container>
                <div class="d-md-flex justify-content-between align-items-center">
                    <h3 class="mb-3 mb-md-0">Search Bootcamps</h3>
                    <div class="input-group news-input">
                        <input type="text" class="form-control" placeholder="Use keywords like the stack or the technology"></input>
                            <button class="btn btn-dark btn-lg" type="button">Submit</button>
                            </div>
                        </div>
            </Container></section></>
    )
}

const BootcampDetails=()=>{
    // hook for taking the param s to the component
  

    let [bootcampList, setBootcampList] = useState()
    let params = useParams();
    
    useEffect(() => {
        async function getMenus() {

            try {
                const response = await fetch("http://localhost:8080/uisettings/menus")
                let json = response.json()
                json
                    .then(data => {
                        setBootcampList(data)
                        console.log("All Data ", data)
                    })
            } catch (error) {
                let array= BootcampList.BootcampList
                console.log("D1",typeof array, array)
                setBootcampList(array)
                console.log("D2",typeof bootcampList, bootcampList)
            }

        }
        getMenus() // IIF
        console.log("Dheeraj 123",bootcampList)
    }, [])
    
    

    return(
        <>
           <Container>
                <img src="https://elearni.wpenginepowered.com/wp-content/uploads/2014/08/course-10.jpg"></img>

                
           </Container>
        </>
    )
}
export { Bootcamps,BootcampDetails }