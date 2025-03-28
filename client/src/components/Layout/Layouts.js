import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';

const Layouts = ({ 
  children, 
  title = "E-commerse shop now", 
  description = "mern stack project", 
  keywords = "mern, react, node, mongodb", 
  author = "roshanG12" 
}) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layouts;
