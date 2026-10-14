import "./App.css";
import logo from "./img/logo.png";
import search1 from "./img/search1.png";
import search from "./img/search.png";
import user from "./img/user.png"

function App() {
  return (
    <div className="App">
      <header>
        <div className="Logo">
          <img src={logo} />
        </div>

        <h1>MegaMart</h1>

        <div className="search12">
          <img className="search1" src={search1} />
          <h3>Search essentials, groceries and more...</h3>
          <img className="search" src={search} />
        </div>

        <div className="Registr">
          <img src={user}/>
          <h3>Sign Up/Sign In</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
