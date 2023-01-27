import { useEffect, useState } from "react"

const baseUrl="http://localhost:8080"

export const NavBar = (props) => {
    const [items, setItems] = useState()

    
    useEffect(()=>{
            (async ()=>{
             let menuItems = await fetch("https://jsonplaceholder.typicode.com/todos")
             console.log("heree we are calling the ",JSON.stringify(menuItems.json()));             
            //    .then((menuItems.json()))
            //    .then(json=>{
            //     console.log("heree we are calling the ",json);
            //     json.map((menuItem)=>{
            //         setItems(...items,{text:menuItem.menuText,menuItem:menuItem.href})
            //     });
            //    })
               
            })();
    })


    if(!items) return <div>Loading menu items ...</div>;

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
                <div className="container">
                    <a href="#" className="navbar-brand">Frontend Bootcamp</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            {
                                items.map((item, index) => {
                                    return <li className="nav-item">
                                        <a href={item.href} className="nav-link">{item.text}</a>
                                    </li>
                                })};
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}