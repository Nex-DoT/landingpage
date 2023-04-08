import React, { Component } from 'react';
import styles from "./Card.module.css"

export default class Card extends Component {
  render() {
    const {name,img,price} =this.props;
    return (
      <div className={styles.card}>
        <img src={img} alt="" />
        <div className={styles.text}>
        <h3>{name}</h3>
        <p>price: <span>${price}</span></p>
        </div>
        <button className={styles.btn}>+</button>
      </div>
    )
  }
}
