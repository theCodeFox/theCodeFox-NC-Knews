import React, { Component } from 'react';
import { formatDateTime, voteHeart, votingButtons } from '../utils/app-utils';

class ArticleComment extends Component {
  state = {
    voteChange: 0,
  }
  render() {
    const { comment, removeComment } = this.props;
    const { voteChange } = this.state;
    const formattedDateTime = formatDateTime(comment.created_at)
    return <ul className="list-item2" key={`user-${comment.article_id}`}>
      <h4>Article ID: {comment.article_id}</h4>
      <p>Author: {comment.author}</p>
      <p>{formattedDateTime}</p>
      <p>{voteHeart(comment.votes + voteChange)} {comment.votes + voteChange}</p>
      <p className="comment-body">{comment.body}</p>
      <p>Tell us what you thought about the comment:
          {votingButtons(voteChange, this.handleVote)}
        </p>
      <button className="delete" onClick={() => removeComment(comment.comment_id)}>DELETE</button>
    </ul>
  }

  handleVote = (voteChange) => {
    this.setState(prevState => ({
      voteChange: prevState.voteChange + voteChange
    }))
  }

};

export default ArticleComment;