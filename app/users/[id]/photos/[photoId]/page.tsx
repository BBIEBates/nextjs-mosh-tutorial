import React from 'react'

interface Props {
  params: { id: number; photoId: number;}
}

const PhotoDetailPage = ({params: {id, photoId}}: Props) => {
  return (
    <div>
      PhotoPage
      Id: {id}
      photoId: {photoId}
    </div>
  )
}

export default PhotoDetailPage
