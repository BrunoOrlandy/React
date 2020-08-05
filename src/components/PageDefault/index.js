import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

function PageDefaul({children}) {
    return (
        <di>
            <Menu />
            {children}
            <Footer />
        </di>

    );
}


export default PageDefaul;