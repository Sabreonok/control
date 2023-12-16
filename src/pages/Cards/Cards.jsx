import React from 'react'
import './cards.scss'
import Post from '../../Components/Post/Post'

export default function Cards() {
    const [count, setCount] = useState(0)
  return (
    <div className='Cards'>
        <h1>Slider</h1>
        <button>next</button>
        {props.arr.map((item, index) => (
        <Post item={item} key={index} />
      ))}
      <button>prev</button>
    </div>
  )
}
