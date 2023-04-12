import React, { Component } from 'react'
import styles from "./Sercher.module.css"
export class Sercher extends Component {
  constructor(){
    super()
    this.state={
      text : "",
    }
  }
  Chenge = event => {
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return (
      <div className={styles.back}>
        <div className={styles.box}>
        <h1>Search what you need!</h1>
        <input type="text" placeholder='search' value={this.state.text} onChange={this.Chenge} />
        </div>
      </div>
    )
  }
}

export default Sercher