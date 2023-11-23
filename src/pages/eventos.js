import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Eventos = () => {
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const categories = ['Lanzamiento', 'Taller', 'Hackathon', 'Talleres'];

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
		{
			title: 'Taller de Desarrollo de Extensiones',
			date: '15 de Abril, 2023',
			description:
				'Aprende Link desarrollar extensiones para NebulaGhost con la ayuda de nuestros expertos en este taller práctico.',
			image: '/img/taller.jpg',
			link: '/enlace-al-evento-de-lanzamiento',
			category: 'Lanzamiento', // Esta propiedad indica la categoría del evento
		},
		{
			title: 'Hackathon de NebulaGhost',
			date: '10 de junio',
			description:
				'Participa en nuestro emocionante Hackathon y compite con otrosdesarrolladores para crear proyectos asombrosos enNebulaGhost.',
			image: '/img/hackaton.png',
			link: '/enlace-al-evento-de-lanzamiento',
			category: 'Taller', // Esta propiedad indica la categoría del evento
		},
		{
			title: 'Conferencias de Desarrolladores',
			date: 'Anuales',
			description:
				'Conferencias que incluyen charlas técnicas, paneles de discusión y oportunidades de networking para la comunidad de desarrolladores de NebulaGhost.',
			image: '/img/team.jpg',
			link: '/enlace-a-las-conferencias',
			category: 'Taller',
		},
		{
			title: 'Charlas en Universidades y Escuelas',
			date: 'Programadas según disponibilidad',
			description:
				'Presentaciones y charlas informativas sobre NebulaGhost en instituciones educativas, dirigidas a estudiantes y profesores interesados en aprender y enseñar el lenguaje.',
			image: '/img/taller.jpg',
			link: '/enlace-a-las-charlas',
			category: 'talleres',
		},
		{
			title: 'Webinars de Formación',
			date: 'Programados regularmente',
			description:
				'Sesiones en línea de formación y tutoriales en tiempo real que cubren diversos aspectos de NebulaGhost, incluyendo ejemplos prácticos y Q&A en vivo.',
			image: '/img/kevin.jpg',
			link: '/enlace-a-los-webinars',
			category: 'Talleres',
		},
		{
			title: 'Meetups de Comunidad',
			date: 'Programadas por grupos de la comunidad',
			description:
				'Encuentros locales y en línea organizados por la comunidad de NebulaGhost, donde los entusiastas y desarrolladores se reúnen para discutir proyectos, compartir conocimientos y establecer contactos.',
			image: '/img/nebula.webp',
			link: '/enlace-a-los-meetups',
			category: 'Hackathon',
		},
		{
			title: 'Colaboración Abierta y Sprints de Desarrollo',
			date: 'Programados por la comunidad',
			description:
				'Eventos en línea donde los contribuyentes pueden colaborar en el desarrollo de NebulaGhost, solucionar problemas y agregar nuevas características al lenguaje.',
			image: '/img/nebula.jpg',
			link: '/enlace-a-la-colaboracion',
			category: 'Lanzamiento',
		},
		{
			title: 'Conferencias Técnicas Especializadas',
			date: 'Programadas según disponibilidad',
			description:
				'Eventos específicos sobre temas técnicos relacionados con NebulaGhost, como seguridad, desarrollo de extensiones, optimización y más.',
			image: '/img/team.jpg',
			link: '/enlace-a-las-conferencias-tecnicas',
			category: 'Lanzamiento',
		},
		{
			title: 'NebulaGhost DevCon',
			date: 'Anualmente en el cuarto trimestre',
			description:
				'Una conferencia anual para desarrolladores de NebulaGhost que se centra en compartir conocimientos técnicos, discutir tendencias emergentes y explorar casos de uso avanzados. Incluye sesiones magistrales, talleres y oportunidades de networking.',
			image: '/img/negro.webp',
			link: '/enlace-a-devcon',
			category: 'Taller',
		},
		{
			title: 'NebulaGhost Game Jam',
			date: 'Varias ediciones a lo largo del año',
			description:
				'Un evento de desarrollo de videojuegos en el que los participantes tienen un tiempo limitado (por ejemplo, 48 horas) para crear juegos utilizando NebulaGhost. Los juegos terminados se evalúan y premian al final del evento.',
			image: '/img/lenguajeprogramacionvideojuegos1.webp',
			link: '/enlace-a-game-jam',
			category: 'Hackathon',
		},
		{
			title: 'NebulaGhost Unconference',
			date: 'Programado ocasionalmente por la comunidad',
			description:
				'Un evento no estructurado donde los participantes eligen los temas de discusión y las sesiones de forma colaborativa. Los asistentes tienen la oportunidad de explorar temas específicos y trabajar en proyectos conjuntos.',
			image:
				'/img/steve-jobs-era-el-idolo-de-la-infancia-del-creador-de-chatgpt.webp',
			link: '/enlace-a-unconference',
			category: 'Talleres',
		},
		{
			title: 'NebulaGhost Code Fest',
			date: 'Anualmente en primavera',
			description:
				'Un festival de código que celebra la creatividad y la innovación en NebulaGhost. Los participantes colaboran en proyectos, comparten ideas y compiten en desafíos de codificación.',
			image: '/img/web_summit_cover.webp',
			link: '/enlace-a-code-fest',
			category: 'Hackathon',
		},
		{
			title: 'NebulaGhost Web Development Summit',
			date: 'Serie de eventos a lo largo del año',
			description:
				'Una serie de eventos enfocados en el desarrollo web con NebulaGhost. Incluye sesiones sobre desarrollo frontend, backend, y mejores prácticas para crear aplicaciones web con el lenguaje.',
			image: '/img/SLIIT-CODEFEST-Software-Competition-Sschool-cat-4.webp',
			link: '/enlace-a-web-dev-summit',
			category: 'Lanzamiento',
		},
		{
			title: 'NebulaGhost AI Expo',
			date: 'Bianualmente',
			description:
				'Una exposición que destaca el uso de NebulaGhost en aplicaciones de inteligencia artificial. Incluye charlas sobre implementaciones de IA, casos de estudio y demostraciones prácticas.',
			image: '/img/375_142.webp',
			link: '/enlace-a-ai-expo',
			category: 'Talleres',
		},
	];

	const filteredEventos = eventosData.filter(evento => {
		const categoryMatch =
			selectedCategories.length === 0 ||
			selectedCategories.includes(evento.category);

		const searchMatch =
			searchTerm === '' ||
			evento.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			evento.description.toLowerCase().includes(searchTerm.toLowerCase());

		return categoryMatch && searchMatch;
	});

	function eventoMatchesSearch(evento) {
		const searchMatch =
			searchTerm === '' ||
			evento.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			evento.description.toLowerCase().includes(searchTerm.toLowerCase());

		return searchMatch;
	}

	function resaltarPalabraBuscada(texto) {
		if (searchTerm === '') {
			return texto;
		}

		const expresionRegular = new RegExp(`(${searchTerm})`, 'gi');
		return texto.split(expresionRegular).map((fragmento, index) =>
			expresionRegular.test(fragmento) ? (
				<span key={index} className='bg-yellow-100'>
					{fragmento}
				</span>
			) : (
				<span key={index}>{fragmento}</span>
			),
		);
	}

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

					<div className='mb-4 text-center'>
						<p>Filtrar por categoría:</p>
						<form>
							{categories.map(category => (
								<label key={category} className='mr-2 inline-flex items-center'>
									<input
										type='checkbox'
										className='form-checkbox h-5 w-5 text-indigo-500 accent-green-300'
										checked={selectedCategories.includes(category)}
										onChange={() => toggleCategory(category)}
									/>
									<span className='ml-2 text-gray-200'>{category}</span>
								</label>
							))}
						</form>
					</div>

					<div className='mb-4 text-center'>
						<label className='inline-flex items-center'>
							<span className='text-gray-200 mr-2'>Buscar:</span>
							<input
								type='text'
								value={searchTerm}
								onChange={e => setSearchTerm(e.target.value)}
								className='border border-gray-300 p-2 rounded-md'
							/>
						</label>
					</div>
				</div>
			</section>

			<div className='container mx-auto px-4'>
				{filteredEventos.map((evento, index) => (
					<div key={index} className='mb-8 mt-8 flex flex-wrap'>
						<div className='w-full md:w-1/2 md:pr-4'>
							<Image
								src={evento.image}
								width={600}
								height={400}
								alt={evento.title}
								className='w-full h-64 mb-4 rounded-lg'
							/>
						</div>
						<div className='w-full md:w-1/2'>
							<h2 className='text-3xl font-medium mb-2'>
								{resaltarPalabraBuscada(evento.title)}
							</h2>
							<p className='text-gray-500 mb-2'>
								{resaltarPalabraBuscada(evento.description)}
							</p>
							<p className='text-lg'>
								{eventoMatchesSearch(evento)
									? resaltarPalabraBuscada(evento.description)
									: evento.description}
							</p>
							<Link
								href={evento.link}
								className='text-indigo-500 hover:underline'>
								Leer más
							</Link>
						</div>
					</div>
				))}
			</div>
			<div className='container mx-auto px-4 h-96 flex items-center justify-center'>
				{filteredEventos.length === 0 ? (
					<p className='text-lg text-center text-gray-500'>
						No se encontraron eventos que coincidan con la búsqueda.
					</p>
				) : null}
			</div>
		</main>
	);
};

export default Eventos;
