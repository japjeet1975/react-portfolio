import React from 'react';

function NavItems (props) {
    const items = ['About Me', 'MyWork', 'ContactMe', 'Footer', 'Resume'];
    return (
        <div>
        <ul className = "Navigation">
        {items.map(item => <li className="" key={item}>
            <a
            href={'#item'}
            onClick={() => props.handlePageChange(item)}
            className={
              props.currentPage === item ? 'nav-item-active' : 'nav-item'
            }
          >
            {item}
          </a>
            </li>)}
        </ul>
        </div>
    )
}
export default NavItems;