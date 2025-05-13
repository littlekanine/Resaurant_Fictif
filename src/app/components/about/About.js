import React from 'react';
import Image from 'next/image';
import datas from '../../../../public/photo.json';

const About = () => {
	return (
		<div>
			<section className="flex items-center justify-center flex-col bg-sombre p-8 xl:flex-row gap-4 w-full h-auto lg:gap-16">
				<div className="flex flex-col items-center justify-center h-full w-full text-center gap-4 lg:w-3/4 lg:p-4">
					<div className="flex flex-col h-full w-full gap-4 lg:w-3/4">
						<h3 className="flex font-inter text-gold text-3xl text-left w-full ">Notre histoire</h3>
						<p className="flex w-full text-white font-inter text-left text-sm md:text-lg lg:text-lg">
							Fondé en 2010 par le chef renommé Michel Laurent, Le Saint Sauvage est né dune passion pour les saveurs authentiques et les produits
							d&#39;exception. Notre restaurant allie techniques culinaires traditionnelles et créativité contemporaine.{' '}
						</p>
						<p className="flex w-full text-white font-inter text-left text-sm md:text-lg lg:text-lg">
							Chaque plat raconte une histoire, celle de producteurs locaux passionnés, de saisons respectées et d&#39;un savoir-faire minutieux. Notre équipe
							s&#39;engage à vous offrir une expérience gastronomique mémorable dans un cadre élégant et chaleureux{' '}
						</p>
						<div className="flex flex-row w-full items-center rounded-full gap-4">
							<div className="flex h-0.5 w-16 bg-gold text-left"></div>
							<p className="flex w-full text-gold font-inter text-lg">Chef Michel Laurent</p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4 w-full h-auto p-4 sm:w-full md:w-full lg:w-3/4 lg:h-3/4 xl:w-1/2">
					{datas.map((data, index) => (
						<Image key={index} src={data.src} alt={data.alt} width={data.width} height={data.height} className="object-cover w-full h-full" />
					))}
				</div>
			</section>
		</div>
	);
};

export default About;
