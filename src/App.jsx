import axios from "axios"
import { useState } from "react"

const App = () => {
  const [url, setUrl] = useState('')
  const [shortendUrl, setShortenedUrl] = useState('')

  const handleChange = (e) => {
    setUrl(e.target.value)
  }



  const handleShortenedUrl = async (e) => {
    e.preventDefault();

    try {
      const response = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
      setShortenedUrl(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }

    console.log(url);
    

  }
  return (
    <div className="font-okomito h-screen w-full flex items-center justify-center bg-[#f2f2fb]">
      <div className="main-box md:h-[75%] md:w-[65%] px-[1rem]">
        <header className="text-center">
          <h1 className="capitalize text-5xl font-black lg:text-7xl">create short URL!</h1>
          <p className="pt-[1rem]">Fast and simple website to create a shortener URL, easy to remember and share</p>
        </header>
        
        <div className="card shadow-lg shadow-slate-500/40 mt-[5rem] p-[1rem] rounded-md bg-[#f3f5fb] md:px-[5rem] lg:py-[5rem]">
          <form action="" method="get" className="flex gap-4" onSubmit={handleShortenedUrl}>
            <input 
              type="text"  
              className="p-[.5rem] outline-none rounded-md flex-1 focus:ring-blue-500 focus:ring-1"
              placeholder="https://www.example.com"
              value={url}
              onChange={handleChange}
            />
            <button 
              type="submit"
              className="bg-blue-500 px-[1rem] rounded-md text-white hover:bg-blue-700"
            >Get Short URL</button>
          </form>
          {
            shortendUrl 
            ? (
              <div>Hello {shortendUrl}</div>
            )
            : null
          }
        </div>
      </div>
      
    </div>
  )
}

export default App
