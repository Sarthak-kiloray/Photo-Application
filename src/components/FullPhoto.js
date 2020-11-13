import React from 'react'

const FullPhoto = ({
  photo: {
    id,
    color,
    urls,
    alt_description,
  },
  close
}) => (
  <div className='full' style={{ background: color }}>
    <div className='close' onClick={close} role='button'>
      &times;
    </div>
    <div className='left' onClick={close} role='button'>

    </div>
    <div className='right' onClick={close} role='button'>
    </div>
    <img
      src={urls.regular}
      alt={alt_description || id}
    />
  </div>
)

export default FullPhoto
