import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import { Provider } from 'redux'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h4>Welcome to React</h4>
      </header>
      <PostForm />
      <hr />
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
