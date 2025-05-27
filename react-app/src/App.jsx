import { useEffect, useState } from 'react'

function App() {

  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [data, setData] = useState([])
  const onSubmit = (e) => {
    e.preventDefault()
    const forData = { title, body }
    console.log(forData);
  }
  console.log(data);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setData(data))
  })

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input id='title' className='border' type="text" onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="body">Body</label>
        <input id='body' className='border' type="text" onChange={(e) => setBody(e.target.value)} />
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
