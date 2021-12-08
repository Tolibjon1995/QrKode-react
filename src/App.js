import React, { useState } from 'react'
import QRCode from "react-qr-code";


function App() {
  const [inp, setinp] = useState('')
  return (
    <div>
      <div className='container text-center'>
        <h1 className='mt-3'>Qr Kod yaratish</h1>
        <div className='col-12 col-md-4 offset-md-4 '>
          <input
            onChange={e => setinp(e.target.value)}
            type='text'
            className='form-control mt-3'
            placeholder='Qr Kod uchun malumot kiriting' />
        </div>
        <QRCode
          bgColor='yellow'
          fgColor='blue'
          value={inp}
          className='mt-5' />
      </div>
    </div>

  )
}

export default App
