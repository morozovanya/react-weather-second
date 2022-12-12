import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather />
      <footer>
        This project was coded by <a href="https://www.facebook.com/profile.php?id=100008369254419">Anna Morozova</a> and is {" "}
        <a href="https://github.com/morozovanya/react-weather-second" target="_blank" rel="noreferrer">
          open-sourced
        </a>
        </footer>
        </div>
    </div>
  );
}

