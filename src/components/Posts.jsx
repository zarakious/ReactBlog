import React, { useState, useEffect } from "react";
import Post from "./Post";
import Picker from "emoji-picker-react";

const Posts = ({ post, setPost, posts, setPosts }) => {
	//State Staff
	const [title, setTitel] = useState("");
	const [content, setContent] = useState("");
	const [error, setError] = useState("");
	const [backgroundcolor, setBackgroundColor] = useState("none");
	const [addbutton, setAddbutton] = useState("");
	const [wordsCounter, SetWordsCounter] = useState(0);
	const [comment, setComment] = useState([]);
	const [commentsList, setCommentsList] = useState([]);
	const [category, setCategory] = useState("");
	const [filtredPosts, SetFiltredPosts] = useState(posts);
	const [chosenEmoji, setChosenEmoji] = useState(null);
	const [searchInput, setSearchInput] = useState("");
	const [searchSucces, setSearchSucces] = useState("none");

	// Functions Staff

	const handleSearchInput = (e) => setSearchInput(e.target.value);
	const search = (evt) => {
		if (evt.key === "Enter") {
			SetFiltredPosts(
				posts.filter((element) => element.content.includes(searchInput))
			);

			setSearchInput("");
		}
	};
	useEffect(() => {
		if (filtredPosts.length > 0) {
			setSearchSucces("none");
		} else {
			setSearchSucces("");
		}
	}, [filtredPosts]);
	const onEmojiClick = (event, emojiObject) => {
		setChosenEmoji(emojiObject);
	};
	const handleCategorySelection = (e) => {
		setCategory(e.target.value);
		console.log(category);
	};

	const handleChoosenCategory = (event) => {
		if (event.target.value === "all") {
			SetFiltredPosts(posts);
		} else {
			const filtred = posts.filter(
				(element) => element.category === event.target.value
			);
			SetFiltredPosts(filtred);
		}

		console.log(filtredPosts);
	};

	const handleTitleInput = (e) => {
		setTitel(e.target.value);
	};
	const handleContentInput = (e) => {
		if (content.length < 10) {
			setError("The Article Should be at least 10 charcters");
			setBackgroundColor("white");
			setAddbutton("disabled");
		} else if (content.length > 700) {
			setError("The Artice Excessed The Max Allowed value of characters");
			setBackgroundColor("white");
			setAddbutton("disabled");
		} else {
			setError("");
			setBackgroundColor("transparent");
			setAddbutton("");
		}
		SetWordsCounter(e.target.value.length);
		setContent(e.target.value);
	};
	const addPost = (e) => {
		e.preventDefault();
		setPosts([
			...posts,
			{
				id: Math.random() * 1000,
				title: title,
				content: content,
				category: category,
			},
		]);
		setTitel("");
		setContent("");
		SetWordsCounter(0);
	};
	return (
		<div>
			<div className="posts-container">
				<div className="posts">
					<div className="posts-header">
						<div className="header-select">
							<div className="search-box">
								<input
									type="text"
									className="search-bar"
									placeholder="Search..."
									onChange={handleSearchInput}
									onKeyDown={search}
									value={searchInput}
								/>
							</div>
							<div className="failed-search" style={{ display: searchSucces }}>
								Oups Nothing Related to your search...
							</div>
						</div>
						<div className="select-list">
							<label htmlFor="filterPosts">Choose a category: </label>
							<select
								className="box"
								name="filterPosts"
								id="filterPosts"
								onChange={handleChoosenCategory}
							>
								<option value="all">All</option>
								<option value="sport">Sport</option>
								<option value="gaming">Gaming</option>
								<option value="art">Art</option>
								<option value="music">Music</option>
								<option value="science">Science</option>
								<option value="economy">Economy</option>
							</select>
						</div>
					</div>
					{filtredPosts.map((element) => (
						<Post
							key={element.id}
							post={element}
							comment={comment}
							setComment={setComment}
							setCommentsList={setCommentsList}
							commentsList={commentsList}
						/>
					))}
					<h2>Write a new Thread</h2>
					<form action="submit" className="form">
						<div className="form-header">
							<input
								value={title}
								onChange={handleTitleInput}
								type="text"
								name="post-name"
								placeholder="Title here...."
							/>
							<select
								name="categoy"
								id="category"
								onChange={handleCategorySelection}
							>
								<option value="sport">Sport</option>
								<option value="gaming">Gaming</option>
								<option value="art">Art</option>
								<option value="music">Music</option>
								<option value="Science">Science</option>
								<option value="Economy">Economy</option>
							</select>
						</div>

						<textarea
							value={content}
							onChange={handleContentInput}
							name="post-content"
							id="post-content"
							cols="30"
							rows="10"
							placeholder="Your Post Here...."
						></textarea>
						<div className="footer-comment">
							<div className="word-counters">{wordsCounter}/700</div>
							<div>
								<small style={{ backgroundColor: backgroundcolor }}>
									{error}
								</small>
							</div>
						</div>
						<button onClick={addPost} disabled={addbutton}>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Posts;
