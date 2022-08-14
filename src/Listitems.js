import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む
import React from 'react';              //Reactを読み込んでいる
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import classes from "./Listitems.module.css";


export default function Listitems(props) {
   const {
      iframeSource = '<iframe height=300 width=300 src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=tuner3503-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07B7NXV4R&linkId=fccb15e38a017dc265ed4e258756b3f4" ></iframe>                 '
    } = props;
 return (

    <div>     
    <p>listItems</p>
    <br/>                              //追加　改行のhtmlタブ
    <div  className={classes.test} dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
    
    </div>   
 
 
 );
}