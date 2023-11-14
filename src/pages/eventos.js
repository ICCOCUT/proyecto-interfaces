import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Eventos = () => {
	const [selectedCategories, setSelectedCategories] = useState([]);

	const categories = [
		'Lanzamiento',
		'Taller',
		'Hackathon',
		'Talleres',
		'Conferencias',
		'Charlas',
		'Webinars',
		'Meetups',
		'Colaboración',
		'Conferencias Técnicas',
		'Unconference',
		'Game Jam',
	];

	const eventosData = [
		{
			title: 'Evento de Lanzamiento de NebulaGhost X',
			date: '30 de Abril, 2023',
			description:
				'Únete a nosotros para celebrar el lanzamiento de NebulaGhost X, la última versión de nuestra plataforma de desarrollo.',
			image: '/img/lanzamiento.webp',
			link: '/enlace-al-evento-de-lanzamiento',
			category: 'Lanzamiento', // Esta propiedad indica la categoría del evento
		},
		// Puedes agregar más eventos siguiendo el mismo formato
	];

	const toggleCategory = category => {
		if (selectedCategories.includes(category)) {
			setSelectedCategories(prevCategories =>
				prevCategories.filter(c => c !== category),
			);
		} else {
			setSelectedCategories(prevCategories => [...prevCategories, category]);
		}
	};

	return (
		<main>
			<section className='text-gray-400 body-font bg-gray-900'>
				<div className='container mx-auto flex-wrap items-center justify-center py-12'>
					<h1 className='text-4xl font-medium text-white mb-4 text-center'>
						Eventos de NebulaGhost
					</h1>
					<p className='text-lg leading-relaxed mb-8 text-center'>
						Descubre nuestros próximos eventos y mantente actualizado con lo que
						está sucediendo en NebulaGhost.
					</p>
				</div>
			</section>

			<div className='container mx-auto px-4'>
				<div className='mb-4'>
					<p>Filtrar por categoría:</p>
					{categories.map(category => (
						<button
							key={category}
							className={`mr-2 p-2 rounded-lg ${
								selectedCategories.includes(category)
									? 'bg-indigo-500 text-white'
									: 'bg-gray-500 text-gray-100'
							}`}
							onClick={() => toggleCategory(category)}>
							{category}
						</button>
					))}
				</div>

				{eventosData
					.filter(evento =>
						selectedCategories.length === 0
							? true
							: selectedCategories.includes(evento.category),
					)
					.map((evento, index) => (
						<div key={index} className='mb-8 flex flex-wrap'>
							<div className='w-full md:w-1/2 md:pr-4'>
								<Image
									src={evento.image}
									width={600}
									height={400}
									alt={evento.title}
									className='object-cover w-full h-64 mb-4 rounded-lg'
								/>
							</div>
							<div className='w-full md:w-1/2'>
								<h2 className='text-3xl font-medium mb-2'>{evento.title}</h2>
								<p className='text-gray-500 mb-2'>{evento.date}</p>
								<p className='text-lg'>{evento.description}</p>
								<Link
									href={evento.link}
									className='text-indigo-500 hover:underline'>
									Leer más
								</Link>
							</div>
						</div>
					))}
			</div>
		</main>
	);
};

export default Eventos;
