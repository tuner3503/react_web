import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む
import React from 'react';              //Reactを読み込んでいる
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Listitems from './Listitems'; //追加　page2を読み込んでいる

class page2 extends React.Component {   //page2クラスにReact.Componentを継承する
 
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (

            <div>     
                <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                 <Button>Save</Button>
                </Box>

                <p>HelloPage2!!!</p>
                <br/>                              //追加　改行のhtmlタブ
                <Link to={`/`}>Go To page1</Link>  //追加　Go To page1をクリックするとhttp://localhost:3000/に遷移する
                <br/>            
                <Listitems></Listitems>    
                <br/>                     
                        
            </div>
                           

            
        );
    }
}
 
export default page2;  