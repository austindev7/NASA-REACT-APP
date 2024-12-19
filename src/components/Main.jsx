import React from 'react'

export default function Main(props) {
  const { data } = props
  return (
    <>
        <div className="imgContainer">
            <img src={data.url} alt={data.hdarl || "nasa-img"} className="bgImage" />
        </div>
    </>
  )
}
