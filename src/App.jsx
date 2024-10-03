import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const accessToken = 'ca6e16f9a3e5de1f79266851dbd4265fee544279';
const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

const App = () => {
  const [url, setUrl] = useState('')
  const [shortendUrl, setShortenedUrl] = useState('')

  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  const handleShortenedUrl = async (e) => {
    e.preventDefault();

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ long_url: url }),
    })
    .then(response => response.json())
    .then(data => setShortenedUrl(data.link))
    .catch(error => console.error(error));
  }

  return (
    <div className="font-okomito h-screen w-sreen overflow-hidden  bg-[#f2f2fb] lg:flex lg:items-center lg:justify-center">
      <div className="main-box h-full lg:w-[65%] px-[1rem] flex flex-col justify-between lg:pt-[5rem] py-4">
        <header className="text-center">
          <h1 className="capitalize text-5xl font-black lg:text-7xl">créer une URL courte !</h1>
          <p className="pt-[1rem]">Site Web rapide et simple pour créer une URL raccourcie, facile à retenir et à partager</p>
        </header>
        
        <div className="card shadow-lg shadow-slate-500/40 p-[1rem] rounded-md bg-[#f3f5fb] lg:px-[5rem] lg:py-[3rem] xl:py-[5rem]">
          <form action="" method="get" className="flex gap-4 flex-col lg:flex-row" onSubmit={handleShortenedUrl}>
            <input 
              type="text"  
              className="p-[.5rem] outline-none rounded-md flex-1 focus:ring-blue-500 focus:ring-1"
              placeholder="https://www.exemple.com"
              value={url}
              onChange={handleChange}
            />
            <button 
              type="submit"
              className="bg-blue-500 px-[1rem] rounded-md text-white hover:bg-blue-700"
            >Obtenir une URL courte</button>
          </form>
          {
            shortendUrl 
            && 
              <div className="px-[5px] py-[1rem] border my-[1rem] flex justify-between items-center">
                <CopyToClipboard text={shortendUrl} >
                  <button 
                    className="px-[1rem] py-[.5rem] rounded-md border border-green-500 hover:bg-green-500"
                    onClick={() => alert("l'URL a bien été copieé!")}
                  >Copy URL</button>
                </CopyToClipboard>


                <div>{shortendUrl}</div>
              </div>
            
          }
        </div>
        <footer className="bg-white rounded-md flex justify-between p-[.5rem]">
         <div>© 2024 Yodaime hokage</div>
         <div className="text-blue-500 font-bold">Harigato!</div>
        </footer>
      </div>


      
    </div>
  )
}

export default App
