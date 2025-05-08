import React from 'react';
import Image from 'next/image';
import Button from '../button/Button';

const HerroBanner = () => {
	return (
		<div className="relative flex items-center justify-center h-screen w-full">
			{/* Image de fond */}
			<div className='absolute inset-0 bg-[url("/images/restau_image.jpg")] bg-cover bg-center sm:bg-top md:bg-center brightness-50 z-0'></div>

			{/* Contenu */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center gap-4 px-4">
				{/* Titre principal */}
				<h1 className="flex text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] text-white w-full justify-center items-center font-instrument">
					LE<span className="text-gold ">&nbsp;SAINT&nbsp;</span> SAUVAGE
				</h1>

				{/* Sous-titre */}
				<h2 className="text-white font-instrument-serif text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-[25px]">Une expérience culinaire exceptionnelle à Toulouse</h2>

				{/* Boutons */}
				<div className="flex flex-row gap-2 sm:gap-4">
					<Button
						className={
							'flex justify-center items-center w-[150px] h-[40px] sm:w-[180px] sm:h-[50px] md:w-[198px] md:h-[54px] rounded-[5px] backdrop-blur-lg border-white border-2 text-white hover:bg-gold transition-all duration-300 hover:text-black cursor-pointer hover:scale-105 hover:border-none'
						}
						text={'Découvrir le menu'}
					/>
					<Button
						className={
							'flex justify-center items-center w-[150px] h-[40px] sm:w-[180px] sm:h-[50px] md:w-[198px] md:h-[54px] bg-transparent backdrop-blur-lg border-white border-2 rounded-[5px] text-white hover:bg-gold transition-all duration-300 hover:text-black cursor-pointer hover:scale-105 hover:border-none'
						}
						text={'Réserver une table'}
					/>
				</div>
			</div>
		</div>
	);
};

export default HerroBanner;
