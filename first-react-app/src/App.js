import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1 className="my-class">This is JSX</h1>
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
      <form action="/process" method="post">
      <div className="form-group">
        <label htmlFor="email">Email:</label>                    
        <input type="text" id="email" name="username" className="form-control" /> 
      </div>
    </form>
    </>
  );
}

export default App;
