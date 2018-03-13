import { mount, shallow } from 'enzyme/build/index';
import React from 'react';
import moxios from 'moxios';
import Transaction from '../../components/Transaction/Transaction';
import TransactionDesktop from '../../components/Transaction/TransactionDesktop';
import TransactionMobile from '../../components/Transaction/TransactionMobile';

describe('Transaction', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  describe('render', () => {
    it('contains Transactiontable', () => {
      const wrapper = shallow(<Transaction/>);
      expect(wrapper.contains(<TransactionDesktop/>)).toEqual(true);
      expect(wrapper.contains(<TransactionMobile/>)).toEqual(true);
    });

  });
  describe('#FetchData', () => {
    it('should fetch transaction data', (done) => {
      const wrapper = mount(<Transaction/>);
      const response = [];
      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: response,
        }).then(() => {
          expect(wrapper.state('transactionCollection')).toEqual(response);
          done();
        });
      });
    });
  });
});