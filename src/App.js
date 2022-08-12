import logo from './logo.svg';
import './App.css';
import page1 from './page1'; //作成したpage1.jsを読み込んでいる
import { BrowserRouter, Switch, Route, Link,NavLink } from "react-router-dom";
import page2 from './page2'; //追加　page2を読み込んでいる
import Schedule from './Schedule'; //追加　page2を読み込んでいる


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          react sample
        </p>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={page1} />//URLのパスが'/'のみの時にpage1を表示する
          <Route exact path="/page2" component={page2} />//追加　URLで/page2を指定するとpage2を表示する
          <Route exact path="/Schedule" component={Schedule} />//追加　URLで/page2を指定するとpage2を表示する
        </Switch>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
