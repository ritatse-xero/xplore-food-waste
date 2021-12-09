import { Component } from 'react';
import React from 'react';
import bank from '@xero/xui-icon/icons/bank';
import XUIIcon from '@xero/xui/react/icon';
import XUISelectBox, { XUISelectBoxOption, TextHelpers } from '@xero/xui/react/selectbox';

const banks = ['VIC', 'ACT', 'NSW', 'WA', 'QLD', 'SA', 'NT'];

class Selection extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      selectedBank: banks[2]
    };

    this.onBankSelect = this.onBankSelect.bind(this);
    this.selectOne = React.createRef();
  }

  onBankSelect(value) {
    this.setState({
      selectedBank: value
    });
  }

//   fetch("./locations.json")

  render() {
    const MiniApp = this;

    return (
      <XUISelectBox
        ref={this.selectOne}
        name="selectOne"
        label="Select a State"
        buttonContent={
          <span className="xui-u-flex">
            <XUIIcon icon={bank} className="xui-margin-right-xsmall" />
            {TextHelpers.getText(MiniApp.state.selectedBank, 'Choose a State')}
          </span>
        }
        isTextTruncated={false}
        caretTitle="Toggle list"
      >
        {banks.map((opt, idx) => {
          return (
            <XUISelectBoxOption
              id={opt}
              isSelected={opt === MiniApp.state.selectedBank}
              key={idx + opt + 'userDefined Key'}
              onSelect={MiniApp.onBankSelect}
              value={opt}
            >
              {opt}
            </XUISelectBoxOption>
          );
        })}
      </XUISelectBox>
    );
  }
}

<Selection />;

export default Selection;
