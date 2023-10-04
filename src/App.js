
import './App.css';
import Data from './components/Data';
import Navbar from './components/Navbar';
import data from "./data.json"
import Pagination from './components/Pagination';
import { useState, useEffect } from 'react';
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);


  const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);
    
   
  return (
    
    
    <div className="App">
 
    <Navbar/>
    
     <Data data={currentPosts}/>
     <Pagination totalPosts={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>
    </div>
  );
}

export default App;
