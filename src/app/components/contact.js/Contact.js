'use client';

import React from 'react';
import Button from '../button/Button';
import { MapProvider } from '../../providers/map-providers';
import MapComponent from '../map/Map';
import { useState } from 'react';

const Contact = () => {
	const [reservationSuccess, setReservationSuccess] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());

		if (!data.name || !data.date || !data.time || !data.guests || !data.phone) {
			return;
		}
		setReservationSuccess(true);
		e.target.reset();
	};

	const getCurrentDate = () => {
		const today = new Date();
		const day = String(today.getDate()).padStart(2, '0');
		const month = String(today.getMonth() + 1).padStart(2, '0');
		const year = today.getFullYear();

		return `${year}-${month}-${day}`;
	};

	return (
		<div>
			<section id="contact" className="flex flex-col items-center justify-center w-full bg-noir gap-2 ">
				<div className="flex flex-col justify-center items-center h-full w-full text-center gap-8">
					<div className="lg:flex lg:flex-col lg:gap-4 lg:w-2/3 lg:pt-8 lg:pb-8 lg:justify-center lg:items-center">
						<div className="lg:flex lg:flex-row lg:justify-between lg:w-full">
							<div className="flex gap-4 flex-col w-full lg:p4 xl:p-4 lg:flex-row">
								<div className="flex bg-sombre flex-col  rounded-sm gap-4 p-4 min-h-auto lg:w-auto">
									<h3 className="flex font-inter text-gold text-2xl w-full text-left ">Réserver une table</h3>
									<p className="text-white text-left text-sm ">
										Pour une expérience optimal, nous vous conseillons de reserver une table à l&#39avance.
									</p>
									<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
										<label htmlFor="name" className="text-white text-left text-sm">
											Nom
										</label>
										<input
											type="text"
											id="name"
											name="name"
											required
											className="w-full p-2 bg-black outline-none border border-gray text-white"
										/>
										<div className="flex flex-row gap-4">
											<div className="flex flex-col w-1/2 gap-2">
												<label htmlFor="date" className="text-white text-left text-sm">
													Date
												</label>
												<input
													type="date"
													id="date"
													name="date"
													required
													min={getCurrentDate()}
													className="w-full p-2 outline-none bg-black  text-white border border-gray"
												/>
											</div>
											<div className="flex flex-col w-1/2 gap-2">
												<label htmlFor="time" className="text-white text-left text-sm">
													Heure
												</label>
												<input
													type="time"
													id="time"
													name="time"
													required
													className="w-full p-2 outline-none bg-black  text-white border border-gray"
												/>
											</div>
										</div>
										<div className="flex flex-row gap-4">
											<div className="flex flex-col w-1/2 gap-2">
												<label htmlFor="guests" className="text-white text-left text-sm">
													Nombre de personnes
												</label>
												<input
													type="number"
													id="guests"
													name="guests"
													required
													className="w-full p-2 outline-none bg-black  text-white border border-gray"
												/>
											</div>
											<div className="flex flex-col w-1/2 gap-2">
												<label htmlFor="phone" className="text-white text-left text-sm">
													Téléphone
												</label>
												<input
													type="tel"
													id="phone"
													name="phone"
													required
													className="w-full p-2 outline-none bg-black  text-white border border-gray"
												/>
											</div>
										</div>
										<div className="flex gap-2 flex-col w-full">
											<label htmlFor="email" className="text-white text-left text-sm">
												Messsage optionel
											</label>
											<textarea
												type="email"
												id="email"
												name="email"
												required
												className="w-full p-2 outline-none bg-black  text-white border border-gray"
											/>
										</div>
										<div className="flex gap-2 flex-col w-full"></div>
										{reservationSuccess && (
											<div className="text-green-700 text-center">Votre réservation a été prise en compte avec succès !</div>
										)}
										<Button
											text={'Réserver maintenant'}
											className="bg-gold text-black w-full p-2 rounded-sm hover:bg-gold/80 transition-all duration-300 ease-in-out hover:scale-103 cursor-pointer"
											type="submit"
										/>
									</form>
								</div>
							</div>
							<div className=" flex flex-col justify-center items-center text-white gap-8 w-full p-8 md:justify-center md:items-center lg:p-4 lg:flex-col">
								<h2 className="text-gold text-2xl font-semibold text-left">Informations</h2>
								<div className="flex flex-col gap-4 w-full items-center justify-between lg:gap-4  lg:w-full">
									<div className="flex w-full gap-2 lg flex-col lg:p-4 lg:gap-8 lg:w-full">
										<div className="flex flex-col w-full lg:gap-4">
											<h3 className="text-white text-lg font-medium text-left">Heures d&#39ouverture</h3>
											<ul className=" flex flex-col text-gray-300 w-full text-left">
												<li className="flex justify-between">
													<span>Lundi - Jeudi</span>
													<span>19:00 - 23:00</span>
												</li>
												<li className="flex justify-between">
													<span>Vendredi - Samedi</span>
													<span>19:00 - 00:00</span>
												</li>
												<li className="flex justify-between">
													<span>Dimanche</span>
													<span>Fermé</span>
												</li>
											</ul>
										</div>
										<div className="flex flex-col gap-4 pt-4 pb-4 lg:justify-between">
											<div className="flex flex-col w-full">
												<h3 className="text-white text-lg font-medium text-left">Contact</h3>
												<p className="text-gray-300 text-left">+33 fictif</p>
												<p className="text-gray-300 text-left">restaurant@fictif.fr</p>
											</div>

											<div className="flex flex-col w-full lg:text-right">
												<h3 className="flex flex-col text-white text-lg font-medium text-left">Adresse</h3>
												<p className="text-gray-300 text-left">42 Rue de la fictivité</p>
												<p className="text-gray-300 text-left">75008 Paris, peut être</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center items-center lg:w-full lg:h-1/2 p-4 ">
							<MapProvider>
								<MapComponent />
							</MapProvider>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
