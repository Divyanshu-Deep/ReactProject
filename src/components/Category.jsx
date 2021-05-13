import React from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap'
const Category = () => {
    const [items] = React.useState([
        {
            name: 'Mens',
            id:"1",
           
        },
        {
            name:"Women",
            id:"2",
            

        },
        {
            name:"Children",
            id:"3",
            

        }
    ])
    return (
       <div className="dropdown"> 
        {items.map((item)=>(
            <div key={item.id}> 
            <DropdownButton id="dropdown-basic-button" title={item.name}>
             <Dropdown.Item href="#/action-1">Item 1</Dropdown.Item>
             <Dropdown.Item href="#/action-2">Item 2</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Item 3</Dropdown.Item>
             </DropdownButton>
            </div>
        ))}
       </div>   
    )
}

export default Category
