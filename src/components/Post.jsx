import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faThumbsUp,
	faThumbsDown,
	faComment,
	faStar,
	faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import Comment from "../components/Comment";

const Post = ({ post, comment, setComment, setCommentsList, commentsList }) => {
	const [counter, setCounter] = useState(0);
	const [upDisabled, setUpDisabled] = useState(false);
	const [downDisabled, setDownDisabled] = useState(false);
	const [displayReply, setDisplayReply] = useState("none");

	const handleDisplayReply = () => {
		setDisplayReply("");
	};

	const handleLikes = () => {
		setCounter(counter + 1);
		setUpDisabled(true);
		setDownDisabled(false);
		console.log("state Changed ");
	};
	const hadleDislikes = () => {
		counter > 0 ? setCounter(counter - 1) : setCounter(0);
		setDownDisabled(true);
		setUpDisabled(false);
	};
	const handleCommentInput = (e) => {
		setComment(e.target.value);
		console.log(comment);
	};
	const handleAddComments = (e) => {
		e.preventDefault();
		setCommentsList([
			...commentsList,
			{ id: Math.random() * 1000, postID: post.id, content: comment },
		]);
		setComment("");
		setDisplayReply("none");
	};

	return (
		<div className="post-conatiner">
			<div className="post-header">
				<span className="category">{post.category}</span>
				<div className="post-title">{post.title}</div>
			</div>
			<div className="post-wrapper">
				<div className="post-content">{post.content}</div>
			</div>
			<div className="social">
				<button className="like up" onClick={handleLikes} disabled={upDisabled}>
					<FontAwesomeIcon icon={faThumbsUp} />
				</button>
				<span>{counter}</span>
				<button
					className="like down"
					onClick={hadleDislikes}
					disabled={downDisabled}
				>
					<FontAwesomeIcon icon={faThumbsDown} />
				</button>
				<button className="like reply" onClick={handleDisplayReply}>
					<FontAwesomeIcon icon={faComment} /> Reply
				</button>
				<button className="save">
					<FontAwesomeIcon icon={faBookmark} /> Save
				</button>
			</div>
			<div className="comments">
				<span className="comments-header">Comments</span>
				{commentsList
					.filter((item) => item.postID === post.id)
					.map((filtredecomments) => (
						<Comment key={filtredecomments.id} comment={filtredecomments} />
					))}
			</div>
			<div className="comment-container" style={{ display: displayReply }}>
				<form action="submit">
					<textarea
						onChange={handleCommentInput}
						value={comment}
						name="comment"
						id="comment"
						cols="20"
						rows="10"
						placeholder="Your Comment Here...."
					></textarea>
					<button onClick={handleAddComments}>Send</button>
				</form>
			</div>
		</div>
	);
};

export default Post;
