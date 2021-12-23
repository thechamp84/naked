import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function BasicLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
        </div>
    );
}
