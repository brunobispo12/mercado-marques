import React from 'react'
import Promotions from '../views/Promotions'
import ContactUs from '../views/ContactUs'
import './styles/Content.css'

const Content = () => {
  return (
    <main id='home'>
      <div className='mainImg'>Imagem</div>
      <div className='about'>
        <div className="about-text">
          <h2>Nossa história</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio facere dolorem, qui aliquam reiciendis in eum voluptate perspiciatis consequatur praesentium, provident officia minima accusantium deleniti quo doloremque reprehenderit? Tenetur, quis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum minus alias, voluptatibus sapiente vitae sint dignissimos labore dicta commodi laboriosam ut similique velit a fugiat et, dolorum, praesentium consequatur doloremque.</p>
        </div>
        <div className='about-logo'>Logo</div>
      </div>
      <div className='promotions' id='promotions'>
        <Promotions/>
      </div>
      <div className='contact-us' id='contactUs'>
        <ContactUs/>
      </div>
    </main>
  )
}

export default Content