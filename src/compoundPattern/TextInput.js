import React from 'react';

class InputGroup extends React.Component {
  
  static Label = () => (
    <label>this is label</label>
  )

  static Input = () => (
    <input type="text" placeholder="insert here..." />
  )
  
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', ...this.props.style }}>
        {this.props.children}
      </div>
    );
  }
}

export default () => {
  return (
    <div>
      <InputGroup style={{ margin: 10, width: 300 }}>
        <InputGroup.Label />
        <InputGroup.Input />
      </InputGroup>
    </div>
  );
}