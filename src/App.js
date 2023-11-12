// import logo from './logo.svg';
import './App.css';
// import Card from './Components/Card';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import SuggestedProjects from './Components/SuggestedProjects';

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <Dashboard/>

      {/* <Card /> */}

      <SuggestedProjects/>
    </div>
  );
}

export default App;
