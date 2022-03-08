import React from 'react';
import HomeView from "./views/HomeView";
import './App.css';
import AboutUsView from "./views/AboutUsView";

const App = () => {
    return (
        <div className='App'>
          {/*<HomeView />*/}
          <AboutUsView />
        </div>
    );
};

export default App;