import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む
class page1 extends React.Component {   //page1クラスにReact.Componentを継承する
 
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                HelloPage1!!!
                <br/>
                <Link to={`/page2`}>Go To page2</Link> 
                <br/>
                <Link to={`/Schedule`}>Go To Schedule</Link> 
                <br/>
            </div>
        );
    }
}
 
export default page1;   