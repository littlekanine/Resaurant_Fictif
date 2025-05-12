import React from "react";
import Button from "../button/Button";
import { MapProvider } from "../../providers/map-providers";
import MapComponent from "../map/Map";

const Contact = () => {
    return (
        <div>
            <section className="flex flex-col items-center justify-center w-full bg-noir gap-2 p-10">
                <div className="flex flex-row justify-center h-full w-full text-center gap-8">
                    <div className="flex gap-4 flex-col w-1/2 p-4 items-center justify-center">
                        <div className="flex bg-sombre flex-col  rounded-sm gap-4 p-4">
                            <h3 className="flex font-inter text-gold text-3xl w-full text-left ">Réserver une table</h3>
                            <p className="text-white text-left ">Pour une expérience optimal, nous vous conseillons de reserver une table à l'avance.</p>
                            <form className="flex flex-col gap-4">
                                <label htmlFor="name" className="text-white text-left">
                                    Nom
                                </label>
                                <input type="text" id="name" name="name" required className="w-full p-2 bg-black outline-none border border-gray" />
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-col w-1/2 gap-2">
                                        <label htmlFor="date" className="text-white text-left">
                                            Date
                                        </label>
                                        <input type="date" id="date" name="date" required className="w-full p-2 outline-none bg-black  text-white border border-gray" />
                                    </div>
                                    <div className="flex flex-col w-1/2 gap-2">
                                        <label htmlFor="time" className="text-white text-left">
                                            Heure
                                        </label>
                                        <input type="time" id="time" name="time" required className="w-full p-2 outline-none bg-black  text-white border border-gray" />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-col w-1/2 gap-2">
                                        <label htmlFor="guests" className="text-white text-left">
                                            Nombre de personnes
                                        </label>
                                        <input type="number" id="guests" name="guests" required className="w-full p-2 outline-none bg-black  text-white border border-gray" />
                                    </div>
                                    <div className="flex flex-col w-1/2 gap-2">
                                        <label htmlFor="phone" className="text-white text-left">
                                            Téléphone
                                        </label>
                                        <input type="tel" id="phone" name="phone" required className="w-full p-2 outline-none bg-black  text-white border border-gray" />
                                    </div>
                                </div>
                                <div className="flex gap-2 flex-col w-full">
                                    <label htmlFor="email" className="text-white text-left">
                                        Messsage optionel
                                    </label>
                                    <textarea type="email" id="email" name="email" required className="w-full p-2 outline-none bg-black  text-white border border-gray" />
                                </div>
                            </form>
                            <Button text={"Réserver maintenant"} className="bg-gold text-black w-full p-2 rounded-sm hover:bg-gold/80 transition-all duration-300 ease-in-out hover:scale-103 cursor-pointer" />
                        </div>
                    </div>
                    <div className=" flex flex-col text-white gap-4 w-1/2 p-4">
                        <h2 className="text-gold text-2xl font-semibold text-left">Informations</h2>

                        <div className="w-full gap-2">
                            <h3 className="text-white text-lg font-medium text-left">Heures d'ouverture</h3>
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

                        <div className="flex flex-col">
                            <h3 className="text-white text-lg font-medium text-left">Contact</h3>
                            <p className="text-gray-300 text-left">+33 1 23 45 67 89</p>
                            <p className="text-gray-300 text-left">contact@lesaintsauvage-restaurant.fr</p>
                        </div>

                        <div>
                            <h3 className="flex flex-col text-white text-lg font-medium text-left">Adresse</h3>
                            <p className="text-gray-300 text-left">42 Rue Gastronomique</p>
                            <p className="text-gray-300 text-left">75008 Paris, France</p>
                        </div>
                        <MapProvider>
                            <MapComponent />
                        </MapProvider>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
