'use client';
import React from 'react';

const Header = () => {
	return (
		<div className="items-center p-2 bg-gray-800 text-white w-full">
			<div className="flex items-center justify-between">
				<h1 className="flex font-instrument ">Le Saint Correct</h1>
				<nav className="flex ml-4">
					<ul className="flex space-x-4">
						<li>
							<button
								onClick={() => {
									const menuSection = document.getElementById('about');
									if (menuSection) {
										menuSection.scrollIntoView({ behavior: 'smooth' });
									}
								}}
								className="text-xs hover:text-gold hover:scale-110 duration-300"
							>
								About
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									const menuSection = document.getElementById('menu');
									if (menuSection) {
										menuSection.scrollIntoView({ behavior: 'smooth' });
									}
								}}
								className="text-xs hover:text-gold hover:scale-110 duration-300"
							>
								Menu
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									const menuSection = document.getElementById('contact');
									if (menuSection) {
										menuSection.scrollIntoView({ behavior: 'smooth' });
									}
								}}
								className="text-xs hover:text-gold hover:scale-110 duration-300"
							>
								Contact
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
