import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="flex footer flex-col gap-6 p-4 bg-sombre items-center justify-between w-full md:flex-row">
			<div className="flex flex-col">
				<h5 className="text-white text-sm">
					LE<span className="text-gold text-sm">&nbsp;SAINT&nbsp;</span> SAUVAGE
				</h5>
				<p className="text-white text-xs">Une expérience culinaire exceptionnelle à Toulouse</p>
			</div>
			<div className="flex gap-4">
				{/* Icônes des réseaux sociaux */}
				<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold">
					<FaFacebookF size={20} />
				</a>
				<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold">
					<FaInstagram size={20} />
				</a>
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold">
					<FaTwitter size={20} />
				</a>
			</div>
			<div className="flex flex-col items-center text-right">
				<p className="text-white text-xs">© 2025 Le Saint Sauvage. Tous droits réservés.</p>
			</div>
		</footer>
	);
};

export default Footer;
