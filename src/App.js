import './App.css';
import Board from './Board';
import Card from './Card';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <main className="flexbox">
       <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card one</p>
          </Card>
          <Card id="card-3" className="card" draggable="true">
            <p>Card three</p>
          </Card>
       </Board>
       <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card two</p>
          </Card>
       </Board>
      
       </main>
      </header>
    </div>
  );
}

export default App;
