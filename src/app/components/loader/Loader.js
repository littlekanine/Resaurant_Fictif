import React from 'react';

const Loader = () => {
	return (
		<div className="flex items-center justify-center bg-sombre">
			<div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
		</div>
	);
};

export default Loader;
