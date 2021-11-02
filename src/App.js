import React, { useState } from "react";
import Posts from "./components/Posts";
import Header from "./components/Header";
import "./App.css";

const App = () => {
	const example = [
		{
			id: 1,
			title: "sport Humans, Not Machines, Make the Tough Calls on Comments",
			content:
				"zizi Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments",
			category: "Sport",
		},
		{
			id: 2,
			title: "art Humans, Not Machines, Make the Tough Calls on Comments",
			content:
				"mimi Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments",
			category: "Art",
		},
		{
			id: 3,
			title: "sport Humans, Not Machines, Make the Tough Calls on Comments",
			content:
				"Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments",
			category: "Sport",
		},
		{
			id: 4,
			title: "art Humans, Not Machines, Make the Tough Calls on Comments",
			content:
				"titi Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments",
			category: "Art",
		},
		{
			id: 5,
			title: "gaming Humans, Not Machines, Make the Tough Calls on Comments",
			content:
				"Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments",
			category: "Gaming",
		},
		{
			id: 6,
			title: "economy Humans, Not Machines, Make the Tough Calls on Comments",
			content:
				"titi Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments",
			category: "Economy",
		},
		{
			id: 7,
			title: "science Humans, Not Machines, Make the Tough Calls on Comments",
			content:
				"Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments",
			category: "science",
		},
		{
			id: 8,
			title: "art Why Humans, Not Machines, Make the Tough Calls on Comments",
			content:
				"Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments Why Humans, Not Machines, Make the Tough Calls on Comments",
			category: "Art",
		},
	];
	const [post, setPost] = useState([{ id: "", title: "", content: "" }]);
	const [posts, setPosts] = useState(example);
	const [users, setUsers] = useState([]);
	return (
		<div>
			<Header />
			<h1>Reddit Blog</h1>
			<Posts post={post} setPost={setPost} posts={posts} setPosts={setPosts} />
		</div>
	);
};

export default App;
