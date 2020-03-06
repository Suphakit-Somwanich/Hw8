import React, { Component } from 'react'

export default class Transaction extends Component {
  render() {
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun",
                      "Jul","Aug","Sep","Oct","Nov","Dec"];
    const { name,amount,date } = this.props.transaction;
    const date_str = date.getDate()+' '+monthNames[date.getMonth()]+' '+(date.getYear()+1900);

    return (  
      <tr className={amount<0?'minus':'plus'}>
        <td>{ name }</td>
        <td>{ amount }</td>
        <td>{ amount<0?'expense':'income' }</td>
        <td>{ date_str }</td>
      </tr>

      // <tr>
      //   <td>Transaction Name</td>
      //   <td>-500</td>
      //   <td>expense</td>
      //   <td>2 Mar 2020</td>
      // </tr>
    )
  }
}