import React, { useState } from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEye,
	faEyeSlash,
	faTimes,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";

function App() {
	const [show, setShow] = useState(false);

	// if valid
	const valid = (item, v_icon, inv_icon) => {
		let text = document.querySelector(`#${item}`);
		text.style.opacity = "1";

		let valid_icon = document.querySelector(`#${item} .${v_icon}`);
		valid_icon.style.opacity = "1";

		let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
		invalid_icon.style.opacity = "0";
	};

	// if invalid
	const invalid = (item, v_icon, inv_icon) => {
		let text = document.querySelector(`#${item}`);
		text.style.opacity = ".5";

		let valid_icon = document.querySelector(`#${item} .${v_icon}`);
		valid_icon.style.opacity = "0";

		let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
		invalid_icon.style.opacity = "0";
	};

	//handle input
	const handleInputChange = (e) => {
		const password = e.target.value;

		if (password.match(/[A-Z]/) != null) {
			valid("capital", "fa-check", "fa-times");
		} else {
			invalid("capital", "fa-check", "fa-times");
		}
		if (password.match(/[0-9]/) != null) {
			valid("num", "fa-check", "fa-times");
		} else {
			invalid("num", "fa-check", "fa-times");
		}
		if (password.match(/[!@#$%^&*]/) != null) {
			valid("char", "fa-check", "fa-times");
		} else {
			invalid("char", "fa-check", "fa-times");
		}
		if (password.length > 7) {
			valid("more8", "fa-check", "fa-times");
		} else {
			invalid("more8", "fa-check", "fa-times");
		}
	};

	const handleShowhidden = () => {
		setShow(!show);
	};

	return (
		<div className="App">
			<div className="container">
				<input
					type={show ? "text" : "password"}
					className="password"
					placeholder="Enter your password"
					onChange={handleInputChange}
				/>
				{show ? (
					<FontAwesomeIcon
						onClick={handleShowhidden}
						icon={faEye}
						id="show_hide"
					/>
				) : (
					<FontAwesomeIcon
						onClick={handleShowhidden}
						icon={faEyeSlash}
						id="show_hide"
					/>
				)}
				<p id="capital">
					<FontAwesomeIcon className="fa-times icon" icon={faTimes} />
					<FontAwesomeIcon className="fa-check icon" icon={faCheck} />
					<span>Capital Letters</span>
				</p>
				<p id="char">
					<FontAwesomeIcon className="fa-times icon" icon={faTimes} />
					<FontAwesomeIcon className="fa-check icon" icon={faCheck} />
					<span>Special Characters</span>
				</p>
				<p id="num">
					<FontAwesomeIcon className="fa-times icon" icon={faTimes} />
					<FontAwesomeIcon className="fa-check icon" icon={faCheck} />
					<span>Use Numbers</span>
				</p>
				<p id="more8">
					<FontAwesomeIcon className="fa-times icon" icon={faTimes} />
					<FontAwesomeIcon className="fa-check icon" icon={faCheck} />
					<span>8+ Characters</span>
				</p>
			</div>
		</div>
	);
}

export default App;
