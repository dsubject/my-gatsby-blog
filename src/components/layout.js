import React from 'react'
import Footer from '../components/footer'
import Seo from './seo'

const pageStyles = {
  color: 'rgba(255, 255, 255, 0.88)',
  padding: 96,
  marginLeft: 'auto',
  marginRight: 'auto',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  fontSize: '1.125rem',
  maxWidth: '42rem'
}

const Layout = ({ children, title, image, keywords }) => {
  return (
    <main className='main-container' style={pageStyles}>
      <Seo title={title} image={image} />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
