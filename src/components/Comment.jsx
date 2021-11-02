import React from "react";
import { useState } from "react/cjs/react.development";
import avatar from "/Users/zarakious/Documents/All React/lorem-ipsum/src/components/img/zaraki.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Comment = ({ commentsList, setCommentsList, comment, setComment }) => {
	const [likesCounter, setLikesCounter] = useState(0);
	const handleVotes = () => {
		setLikesCounter(likesCounter + 1);
	};
	const handleDislikes = () => {
		setLikesCounter(likesCounter - 1);
	};
	return (
		<div>
			<div className="comment-content">
				<span>
					<img className="image" src={avatar} alt="username" />
				</span>
				<span>{comment.content}</span>
				<div className="comment-vote">
					<button className="up" onClick={handleVotes}>
						<FontAwesomeIcon icon={faArrowUp} />
					</button>
					<button>{likesCounter}</button>
					<button className="down" onClick={handleDislikes}>
						<FontAwesomeIcon icon={faArrowDown} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Comment;
