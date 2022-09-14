import './App.css';
import Hcard from './components/Hcard';
import React from 'react';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

function App() {
  const [finalData, setFinalData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    async function loadApi() {
      let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
      let data = await response.json();
      // console.log(data.results);
      setFinalData(data.results);
    };
    loadApi();
  }, [currentPage]);

  function nextPage() {
    setCurrentPage(prev => prev+1);
  }
  function prevPage(){
    setCurrentPage(prev=>prev-1);
  }
  // console.log(finalData.map(item => console.log(item)));
  return (
    <>
    <Header/>
    <Container fluid>
    <div className="App">
      {finalData.map(item => {
        return <Hcard data={item} />
      })}
      
      {/* <Card data={finalData} /> */}
    </div>
    <div className='Buttons'>
      <button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button>

    </div>
    </Container>
    </>
  );
}

export default App;
