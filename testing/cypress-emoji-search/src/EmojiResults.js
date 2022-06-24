import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

export default class EmojiResults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array,
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    const { emojiData } = this.props;

    return (
      <div className="component-emoji-results">
        {emojiData.length === 0 ? (
          <>
            <h2>Emojis not found</h2>
            <p>Try search for something else</p>
          </>
        ) : (
          emojiData.map((emojiData) => (
            <EmojiResultRow
              key={emojiData.title}
              symbol={emojiData.symbol}
              title={emojiData.title}
            />
          ))
        )}
      </div>
    );
  }
}
