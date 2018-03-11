import { mount, shallow } from 'enzyme';
import React from 'react';
import TransactionItem from '../js/TransactionItem';

describe('TransactionItem', () => {
  describe('#ShowItemData', () => {
    it('should display transaction item', () => {
      const transactionData = [{
        date: '12/12/12',
        fromWalletId:'iqbal',
        toWalletId:'iqbal'
        description: 'debt',
        amount: '600000'
      }];
      const wrapper = mount(<TransactionItem transactionCollection={transactionData}/>);
      const item = wrapper.find('tr').at(0);
      const dateColumn = item.find('td').at(0).text();
      const recipientColumn = item.find('td').at(1).text();
      const descriptionColumn = item.find('td').at(2).text();
      const amountColumn = item.find('td').at(3).text();
      const actualOutput =
          `${dateColumn} ${recipientColumn} ${descriptionColumn} ${amountColumn}`;
      const expectedOutput = '12/12/12 iqbal debt 600000';
      expect(actualOutput).toBe(expectedOutput);
    });
  });
});