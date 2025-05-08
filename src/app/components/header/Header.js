import React from 'react';

const Header = () => {
	return (
		<div className="items-center p-2 bg-gray-800 text-white">
			<div className="flex items-center justify-between w-full">
				<h1 className="flex font-instrument">Le Saint Sauvage</h1>
				<nav className="flex ml-4">
					<ul className="flex space-x-4">
						<li>
							<a href="#home" className="hover:text-gold hover:scale-110 duration-300 ">
								Home
							</a>
						</li>
						<li>
							<a href="#menu" className="hover:text-gold">
								Menu
							</a>
						</li>
						<li>
							<a href="#about" className="hover:text-gold">
								About
							</a>
						</li>
						<li>
							<a href="#contact" className="hover:text-gold">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
