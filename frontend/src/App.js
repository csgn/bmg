import './App.css'

import axios from 'axios'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState(false)
  const [pictures, setPictures] = useState([])

  const [error, setError] = useState({
    status: false,
    message: ''
  })

  const handleGetPictures = async () => {
    setLoading(true)

    await axios.get(`${process.env.REACT_APP_API_URL}/api/random?count=${count}`)
      .then(res => {
        setPictures(res.data)
        setLoading(false)
        setError({
          status: false,
          message: ''
        })
      })
      .catch(err => {
        setError({
          status: true,
          message: 'Image was not fetched. Try again'
        })
        setLoading(false)
      })
  }

  if (loading) {
    return <span>fetching({count})...</span>
  }

  return (
    <>
      <div className="bmg-container">
        <h4>fetch anime pics from api.waifu.im</h4>
        <div>
          <input value={count} type="number" onChange={(e) => setCount(e.target.value)} />
          <button className="bmg-btn" onClick={handleGetPictures}>FETCH</button>
        </div>
        {error.status ? (
          <span>ERROR: {error.message}</span>
        ) : (
          <div className="bmg-grid">
            {pictures.map(picture => (
              <div className="bmg-card">
                <img src={picture.url} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
