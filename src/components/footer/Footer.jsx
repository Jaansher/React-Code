import './footer.css'

const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='email-signup'>
        <p>Sign up for our newsletter for the<br /> latest updates</p>
        <input type="email" id='email' placeholder="Email Address" />
      </div>
      <div className='footer'>
        <ul>
          <li>Top Stories</li>
          <li>Media</li>
          <li>Blog</li>
          <li>Events</li>
          <li>Contact Us</li>
        </ul>
        <div className='icons-img'>
          <img src="./images/Social-icons.png" alt="social Handlers" width="40%" />
        </div>
        <p>© Iyagi Inc.</p>
      </div>
    </div>
  )
}

export default Footer