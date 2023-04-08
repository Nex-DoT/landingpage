import React, { Component } from 'react'
import styles from "./Sercher.module.css"
export class Sercher extends Component {
  render() {
    return (
      <div className={styles.back}>
        <div className={styles.box}>
        <h1>Search what you need!</h1>
        <input type="text" placeholder='search' />
        </div>
      </div>
    )
  }
}

export default Sercher