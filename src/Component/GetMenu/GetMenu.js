import React from 'react';
import list from '../MenuList/MenuList'
import ShowMenu from '../ShowMenu/ShowMenu' 

const GetMenu = ({ handleClick }) => {
    return (
        <div>
            {
                list.map((item) =>(
                    <ShowMenu key={item.id} item={item} handleClick={handleClick}/>
                ))
            }
        </div>
    );
}
 

 
export default GetMenu;