import Image from 'next/image';
import HerroBanner from './components/herroBanner/HerroBanner';
import About from './components/about/About';
import MenuSection from './components/menu/Menu';
import Gallerie from './components/gallerie/Gallerie';
import Contact from './components/contact.js/Contact';
import '../../src/app/globals.css';

export default function Home() {
	return (
		<div className="flex min-h-screen">
			<main className="flex-grow w-full">
				<HerroBanner />
				<About />
				<MenuSection />
				<Gallerie />
				<Contact />
			</main>
		</div>
	);
}
