import logo from './logo.svg';
import './App.css';
import page1 from './page1'; //作成したpage1.jsを読み込んでいる
import { BrowserRouter, Switch, Route,Link} from "react-router-dom";
import page2 from './page2'; //追加　page2を読み込んでいる
import Listitems from './Listitems'; //追加　page2を読み込んでいる
import Schedule from './Schedule'; //追加　page2を読み込んでいる
import Header from './components/modules/Header'
import React from 'react';

function App() {
  return (
    <div className="App">
        <Header />
      <header className="App-header">
        <p>
          react sampleaa
        </p>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={page1} />
          <Route exact path="/page2" component={page2} />
          <Route exact path="/Schedule" component={Schedule} />
        </Switch>
        {/* <Link to={`/`}>Go To page1</Link> 
        <Link to={`/page2`}>Go To page2</Link> 
        <Link to={`/Schedule`}>Go To Schedule</Link>  */}


      </BrowserRouter>
      </header>
      
    </div>
    
  );
}

export default App;
