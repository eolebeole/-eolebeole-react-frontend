import React from 'react';

import './GuestBookCard.scss';

class GuestBookCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      like: false,
    };
    this.divElement = React.createRef();
  }

  componentDidMount() {
    const height = this.divElement.current.clientHeight;
    this.setState({ height, like: false });
  }

  render() {
    const { children } = this.props;
    const { height, like } = this.state;
    return (
      <div
        className="GuestBook_item"
        style={{
          gridRowEnd: `span ${Math.floor(height / 11)}`,
        }}
        ref={this.divElement}
      >
        <div id="GuestBook_text">{children}</div>
        <button onClick={() => this.setState((state) => ({ ...state, like: !like }))}>
          {like ? "💚" : "🤍"}
        </button>
        <button>삭제</button>
      </div >
    )
  }
}

export default GuestBookCard;
