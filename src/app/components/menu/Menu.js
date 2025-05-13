'use client';

import React from 'react';
import Button from '../button/Button';
// import menuData from '../../../../public/menu.json';
import { useEffect, useState } from 'react';

const MenuSection = () => {
	const [menu, setMenu] = useState({ menu: {} });
	const [selectedCategory, setSelectedCategory] = useState('entrees');

	useEffect(() => {
		fetch('/menu.json')
			.then((response) => response.json())
			.then((data) => setMenu(data))
			.catch((error) => console.error('Erreur lors du chargement du menu :', error));
	}, []);

	const displayedItems = menu.menu[selectedCategory] || [];

	return (
		<div className="flex w-full">
			<section className="flex flex-col items-center justify-center w-full bg-noir p-8 gap-4">
				<div className="flex flex-col items-center justify-center h-full w-full text-center gap-4">
					<h3 className="flex font-inter text-gold text-3xl w-full justify-center ">Notre Menu</h3>
					<p className="text-white font-inter text-left"> Une sélection de nos plats signatures</p>
				</div>
				<div className="flex w-full sm:justify-center sm:pb-4">
					<Button
						text="Entrées"
						className={` ${
							selectedCategory === 'entrees' ? 'bg-gold' : ''
						} w-32 h-12 border-t-1 border-b-1 border-l-1 border-stone-800 hover:bg-gold focus:bg-gold transition-all duration-300 text-white py-2 px-4 cursor-pointer`}
						onClick={() => setSelectedCategory('entrees')}
					/>
					<Button
						text="Plats"
						className="w-32 h-12 border-t-1 border-b-1 border-stone-800 hover:bg-gold focus:bg-gold transition-all duration-300 text-white py-2 px-4 cursor-pointer"
						onClick={() => setSelectedCategory('plats')}
					/>
					<Button
						text="Desserts"
						className="w-32 h-12 border-t-1 border-b-1 border-r-1 border-stone-800 hover:bg-gold focus:bg-gold transition-all duration-300 text-white py-2 px-4 cursor-pointer"
						onClick={() => setSelectedCategory('desserts')}
					/>
				</div>
				<div className="flex flex-col gap-8 justify-center w-full h-full">
					{displayedItems.map((plat) => (
						<div key={plat.id} className="flex flex-row items-center justify-center  h-auto w-full text-center">
							<div className="flex flex-col w-full gap-4">
								<h4 className="text-white font-inter text-sm text-left sm:text-base  ">{plat.name}</h4>
								<p className="text-white font-inter text-left text-xs sm:text-sm">{plat.description}</p>
							</div>
							<div className="flex flex-col text-right w-1/4">
								<p className="text-gold font-inter text-sm sm:text-base">{plat.price}$</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default MenuSection;
