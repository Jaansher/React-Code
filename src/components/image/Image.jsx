import './image.css'

const Image = () => {
  return (
    <div className='container'>
      <div>
        <div className='text'>
          <h1>
            To continue reading
            <br /> Happiest Dream,
          </h1>
          <p>install Iyagi now!</p>
          <div className='download-btns'>
            <img src="./images/google-download.png" alt="google logo" width="50%" />
            <img src="./images/App-store.png" alt="AppStpre logo" width="50%" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image