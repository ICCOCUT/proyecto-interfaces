import Image from 'next/image';
import Link from 'next/link';

export default function eventos() {
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

			{/* <!-- Sección de Eventos --> */}
			<section className='bg-gray-900 text-white py-16'>
				<div className='container mx-auto'>
					<div className='max-w-3xl mx-auto px-4'>
						{/* <!-- Evento 1 --> */}
						<div className='mb-8 flex flex-wrap'>
							<div className='w-full md:w-1/2 md:pr-4'>
								<Image
									src='/img/lanzamiento.webp'
									width={600}
									height={400}
									alt='Lanzamiento de NebulaGhost X'
									className='object-cover w-full h-64 mb-4 rounded-lg'
								/>
							</div>
							<div className='w-full md:w-1/2'>
								<h2 className='text-3xl font-medium mb-2'>
									Evento de Lanzamiento de NebulaGhost X
								</h2>
								<p className='text-gray-500 mb-2'>30 de Abril, 2023</p>
								<p className='text-lg'>
									Únete Link nosotros para celebrar el lanzamiento de
									NebulaGhost X, la última versión de nuestra plataforma de
									desarrollo.
								</p>
								<Link href='#' className='text-indigo-500 hover:underline'>
									Leer más
								</Link>
							</div>
						</div>

						{/* <!-- Evento 2 --> */}
						<div className='mb-8 flex flex-wrap'>
							<div className='w-full md:w-1/2 md:pr-4'>
								<Image
									src='/img/taller.jpg'
									width={600}
									height={400}
									alt='Taller de Desarrollo de Extensiones'
									className='object-cover w-full h-64 mb-4 rounded-lg'
								/>
							</div>
							<div className='w-full md:w-1/2'>
								<h2 className='text-3xl font-medium mb-2'>
									Taller de Desarrollo de Extensiones
								</h2>
								<p className='text-gray-500 mb-2'>15 de Mayo, 2023</p>
								<p className='text-lg'>
									Aprende Link desarrollar extensiones para NebulaGhost con la
									ayuda de nuestros expertos en este taller práctico.
								</p>
								<Link href='#' className='text-indigo-500 hover:underline'>
									Leer más
								</Link>
							</div>
						</div>

						{/* <!-- Evento 3 --> */}
						<div className='flex flex-wrap'>
							<div className='w-full md:w-1/2 md:pr-4'>
								<Image
									src='/img/hackaton.png'
									width={600}
									height={400}
									alt='Hackathon de NebulaGhost'
									className='object-cover w-full h-64 mb-4 rounded-lg'
								/>
							</div>
							<div className='w-full md:w-1/2'>
								<h2 className='text-3xl font-medium mb-2'>
									Hackathon de NebulaGhost
								</h2>
								<p className='text-gray-500 mb-2'>10 de Junio, 2023</p>
								<p className='text-lg'>
									Participa en nuestro emocionante Hackathon y compite con otros
									desarrolladores para crear proyectos asombrosos en
									NebulaGhost.
								</p>
								<Link href='#' className='text-indigo-500 hover:underline'>
									Leer más
								</Link>
							</div>
							{/* evento 4  */}
							<div className='mb-8 flex flex-wrap'>
								<div className='w-full md:w-1/2 md:pr-4'>
									<Image
										src='/img/taller.jpg'
										width={600}
										height={400}
										alt='Talleres de NebulaGhost'
										className='object-cover w-full h-64 mb-4 rounded-lg'
									/>
								</div>
								<div className='w-full md:w-1/2'>
									<h2 className='text-3xl font-medium mb-2'>
										Talleres de NebulaGhost
									</h2>
									<p className='text-gray-500 mb-2'>20 de Junio, 2023</p>
									<p className='text-lg'>
										Talleres prácticos en línea o presenciales donde los
										participantes pueden aprender a programar en NebulaGhost.
										Los talleres están diseñados para principiantes y
										programadores experimentados.
									</p>
									<Link href='#' className='text-indigo-500 hover:underline'>
										Leer más
									</Link>
								</div>
							</div>
							{/* evento 5 */}
							<div className='mb-8 flex flex-wrap'>
								<div className='w-full md:w-1/2 md:pr-4'>
									<Image
										src='/img/team.jpg'
										width={600}
										height={400}
										alt='Desarrolladores'
										className='object-cover w-full h-64 mb-4 rounded-lg'
									/>
								</div>
								<div className='w-full md:w-1/2'>
									<h2 className='text-3xl font-medium mb-2'>
										Conferencias de Desarrolladores
									</h2>
									<p className='text-gray-500 mb-2'>20 de Junio, 2023</p>
									<p className='text-lg'>
										Conferencias que incluyen charlas técnicas, paneles de
										discusión y oportunidades de networking para la comunidad de
										desarrolladores de NebulaGhost.
									</p>
									<Link href='#' className='text-indigo-500 hover:underline'>
										Leer más
									</Link>
								</div>
							</div>
							{/* evento 6 */}
							<div className='mb-8 flex flex-wrap'>
								<div className='w-full md:w-1/2 md:pr-4'>
									<Image
										src='/img/kevin.jpg'
										width={600}
										height={400}
										alt='Universidades'
										className='object-cover w-full h-64 mb-4 rounded-lg'
									/>
								</div>
								<div className='w-full md:w-1/2'>
									<h2 className='text-3xl font-medium mb-2'>
										Charlas en Universidades y Escuelas
									</h2>
									<p className='text-gray-500 mb-2'>20 de Junio, 2023</p>
									<p className='text-lg'>
										Presentaciones y charlas informativas sobre NebulaGhost en
										instituciones educativas, dirigidas a estudiantes y
										profesores interesados en aprender y enseñar el lenguaje.
									</p>
									<p className='text-gray-500 mb-2'>20 de Junio, 2023</p>
									<p className='text-lg'></p>
									<Link href='#' className='text-indigo-500 hover:underline'>
										Leer más
									</Link>
								</div>
							</div>
							{/* evento 7  */}
							<div className='mb-8 flex flex-wrap'>
								<div className='w-full md:w-1/2 md:pr-4'>
									<Image
										src='/img/lanzamiento.webp'
										width={600}
										height={400}
										alt='Webinars de Formación'
										className='object-cover w-full h-64 mb-4 rounded-lg'
									/>
								</div>
								<div className='w-full md:w-1/2'>
									<h2 className='text-3xl font-medium mb-2'>
										Webinars de Formación
									</h2>
									<p className='text-gray-500 mb-2'>20 de Junio, 2023</p>
									<p className='text-lg'>
										Sesiones en línea de formación y tutoriales en tiempo real
										que cubren diversos aspectos de NebulaGhost, incluyendo
										ejemplos prácticos y Q&A en vivo.
									</p>
									<Link href='#' className='text-indigo-500 hover:underline'>
										Leer más
									</Link>
								</div>
							</div>
							{/* evento 8  */}
							<div className='mb-8 flex flex-wrap'>
								<div className='w-full md:w-1/2 md:pr-4'>
									<Image
										src='/img/herramientas.jpg'
										width={600}
										height={400}
										alt='Meetups de Comunidad'
										className='object-cover w-full h-64 mb-4 rounded-lg'
									/>
								</div>
								<div className='w-full md:w-1/2'>
									<h2 className='text-3xl font-medium mb-2'>
										Meetups de Comunidad
									</h2>
									<p className='text-gray-500 mb-2'>20 de Junio, 2023</p>
									<p className='text-lg'>
										Encuentros locales y en línea organizados por la comunidad
										de NebulaGhost, donde los entusiastas y desarrolladores se
										reúnen para discutir proyectos, compartir conocimientos y
										establecer contactos.
									</p>
									<Link href='#' className='text-indigo-500 hover:underline'>
										Leer más
									</Link>
								</div>
							</div>
							{/* evento 9  */}
							<div className='mb-8 flex flex-wrap'>
								<div className='w-full md:w-1/2 md:pr-4'>
									<Image
										src='/img/team.jpg'
										width={600}
										height={400}
										alt='colaboración Abierta y Sprints de Desarrollo'
										className='object-cover w-full h-64 mb-4 rounded-lg'
									/>
								</div>
								<div className='w-full md:w-1/2'>
									<h2 className='text-3xl font-medium mb-2'>
										Colaboración Abierta y Sprints de Desarrollo
									</h2>
									<p className='text-gray-500 mb-2'>20 de Junio, 2023</p>
									<p className='text-lg'>
										Eventos en línea donde los contribuyentes pueden colaborar
										en el desarrollo de NebulaGhost, solucionar problemas y
										agregar nuevas características al lenguaje.
									</p>
									<Link href='#' className='text-indigo-500 hover:underline'>
										Leer más
									</Link>
								</div>
							</div>
							{/* evento 10  */}
							<div className='mb-8 flex flex-wrap'>
								<div className='w-full md:w-1/2 md:pr-4'>
									<Image
										src='/img/taller.jpg'
										width={600}
										height={400}
										alt='Conferencias Técnicas Especializadas'
										className='object-cover w-full h-64 mb-4 rounded-lg'
									/>
								</div>
								<div className='w-full md:w-1/2'>
									<h2 className='text-3xl font-medium mb-2'>
										Conferencias Técnicas Especializadas
									</h2>
									<p className='text-gray-500 mb-2'>20 de Junio, 2023</p>
									<p className='text-lg'>
										Eventos específicos sobre temas técnicos relacionados con
										NebulaGhost, como seguridad, desarrollo de extensiones,
										optimización y más.
									</p>
									<Link href='#' className='text-indigo-500 hover:underline'>
										Leer más
									</Link>
								</div>
							</div>
							{/* evento 11  */}
							<div className='mb-8 flex flex-wrap'>
								<div className='w-full md:w-1/2 md:pr-4'>
									<Image
										src='/img/taller.jpg'
										width={600}
										height={400}
										alt='Unconference'
										className='object-cover w-full h-64 mb-4 rounded-lg'
									/>
								</div>
								<div className='w-full md:w-1/2'>
									<h2 className='text-3xl font-medium mb-2'>
										NebulaGhost Unconference
									</h2>
									<p className='text-gray-500 mb-2'>20 de Junio, 2023</p>
									<p className='text-lg'>
										Un evento no estructurado donde los participantes eligen los
										temas de discusión y las sesiones de forma colaborativa. Los
										asistentes tienen la oportunidad de explorar temas
										específicos y trabajar en proyectos conjuntos.
									</p>
									<Link href='#' className='text-indigo-500 hover:underline'>
										Leer más
									</Link>
								</div>
							</div>
							{/* evento 12  */}
							<div className='mb-8 flex flex-wrap'>
								<div className='w-full md:w-1/2 md:pr-4'>
									<Image
										src='/img/negro.webp'
										width={600}
										height={400}
										alt='Game'
										className='object-cover w-full h-64 mb-4 rounded-lg'
									/>
								</div>
								<div className='w-full md:w-1/2'>
									<h2 className='text-3xl font-medium mb-2'>
										NebulaGhost Game Jam
									</h2>
									<p className='text-gray-500 mb-2'>20 de Junio, 2023</p>
									<p className='text-lg'>
										Un evento de desarrollo de videojuegos en el que los
										participantes tienen un tiempo limitado (por ejemplo, 48
										horas) para crear juegos utilizando NebulaGhost. Los juegos
										terminados se evalúan y premian al final del evento.
									</p>
									<Link href='#' className='text-indigo-500 hover:underline'>
										Leer más
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
