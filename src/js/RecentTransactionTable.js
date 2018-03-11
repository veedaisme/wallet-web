import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

export default class RecentTransactionTable extends Component {

  render() {
    return (
        <table>
          <thead>
          <tr>
            <th>date</th>
            <th>recipient</th>
            <th>description</th>
            <th>amount</th>
          </tr>
          </thead>
          <tbody>
          <TransactionItem transactionCollection={this.props.transactionList}/>
          </tbody>
        </table>
    );
  }
}
RecentTransactionTable.propTypes = {
  transactionList: PropTypes.object.isRequired,
};