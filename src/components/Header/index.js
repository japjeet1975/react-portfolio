import React, { useState } from 'react';
import About from '../About';
import NavItems from '../NavItems';
import Footer from '../Footer';
import MyWork from '../MyWork';
import ContactMe from '../ContactMe';
import Resume from '../Resume';

function Header() {
    const [currentPage, handlePageChange] = useState('About');
    const showPage = () => {
        if (currentPage === 'MyWork') {
            return <MyWork></MyWork>;
        }
        else if (currentPage === 'Footer'){
            return <Footer></Footer>;
        }
        else if (currentPage === 'ContactMe'){
            return <ContactMe></ContactMe>;
        }
        else if (currentPage === 'Resume'){
            return <Resume></Resume>;
        }
        else {
            return <About></About>;
        }
    }
    return (
        <div>
        <NavItems currentPage={currentPage} handlePageChange={handlePageChange} />
    <div>{showPage()}</div>
</div>
    );

}
export default Header;
