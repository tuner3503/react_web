import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む
import React from 'react';              //Reactを読み込んでいる
 
class Schedule extends React.Component {   //page2クラスにReact.Componentを継承する
 
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                Schedule!!!
                <br/>                              //追加　改行のhtmlタブ
                <Link to={`/`}>Go To page1</Link>  //追加　Go To page1をクリックするとhttp://localhost:3000/に遷移する

                目標を記載する
            </div>
        );
    }
}
 
export default Schedule;  