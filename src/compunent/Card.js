import React, { Component } from 'react';
import styles from "./Card.module.css"

export default class Card extends Component {
  constructor(){
    super()
    this.state = {
      number: 0 ,
    }
  }
  Minus = ()=>{
    this.setState(prevState=>({
      number: prevState.number -1,
    }))

    if(this.state.number === 0){
      this.setState({
        number: 0,
      })
    }
  }
  Positive = ()=>{
    this.setState(prevState=> ({
      number : prevState.number +1,
    }))
  }
  render() {
    const {name,img,price} =this.props;
    return (
      <div className={styles.card}>
        <img src={img} alt="" />
        <div className={styles.text}>
        <h3>{name}</h3>
        <p>price: <span>${price}</span></p>
        </div>
        <div className={styles.boxc}>
        <button className={this.state.number ? styles.btn : styles.deactive} onClick={this.Minus}>-</button>
        <span>{this.state.number}</span>
        <button className={styles.btn} onClick={this.Positive}>+</button>
        </div>
      </div>
    )
  }
}
