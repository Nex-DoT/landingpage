import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from './Card';
import Note20 from "../img/note-20-ultra.jpg"
import s20ultra from "../img/Samsung-Galaxy-S20-Ultra.jpg"
import iphone13 from "../img/iphone-13-pro.webp"
import iphone14 from "../img/iphone-14-pro.webp"

export default class Cards extends Component {
  constructor(){
    super()
    this.state={
      phoneData : [
        {id: 1, img:Note20 , price:"900" , name:'Note 20 Ultra'},
        {id: 2, img:s20ultra , price:"950" ,name:'S20 Ultra'},
        {id: 3, img:iphone13 , price:"1000" , name:'iPhone13 Pro'},
        {id: 4, img:iphone14 , price:"1100" , name:'iPhone14 Pro'}             
      ]
    }
  }
  render() {
    return (
      <div className={styles.box}>
        {/* <Card img={Note20} price="900" name='Note 20 Ultra'/>
        <Card img={s20ultra} price="950" name='S20 Ultra'/>
        <Card img={iphone13} price="1000" name='iPhone13 Pro'/>
        <Card img={iphone14} price="1100" name='iPhone14 Pro'/> */}
        {this.state.phoneData.map(Phone => <Card key={Phone.id} img={Phone.img} price={Phone.price} name={Phone.name}/>)}
      </div>
    )
  }
}
