import Image from 'next/image';
import Link from 'next/link';

export default function herramientas() {
	return (
		<main>
			<section className='text-gray-400 body-font'>
				<div className='container mx-auto flex-wrap items-center justify-center py-12'>
					<h1 className='text-4xl font-medium text-white mb-4 text-center'>
						Herramientas de NebulaGhost
					</h1>
					<p className='text-lg leading-relaxed mb-8 text-center'>
						Explora nuestras herramientas para facilitar el desarrollo en
						NebulaGhost. Desde editores de código hasta recursos de la
						comunidad.
					</p>
					<Image
						className='mx-auto max-w-full'
						width={600}
						height={400}
						src='/img/herramientas.jpg'
						alt='Imagen de Herramientas NebulaGhost'
					/>
				</div>
			</section>

			{/* <!-- Sección de Herramientas --> */}
			<section className='bg-gray-900 text-white py-16'>
				<div className='container mx-auto text-center'>
					<h2 className='text-3xl font-medium mb-6'>Nuestras Herramientas</h2>
					<p className='text-lg mb-8'>
						Explora las herramientas disponibles para mejorar tu experiencia de
						desarrollo en NebulaGhost.
					</p>

					{/* <!-- Grid de herramientas responsivo --> */}
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
						{/* <!-- Herramienta 1 --> */}
						<div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
							<h3 className='text-xl font-medium mb-3'>
								Editor de Código NebulaGhost
							</h3>
							<p className='text-gray-400 mb-4'>
								Edita tus programas en NebulaGhost de manera sencilla con
								nuestro editor en línea.
							</p>
							<Link href='#' className='text-indigo-500 hover:underline'>
								Más información
							</Link>
						</div>

						{/* <!-- Herramienta 2 --> */}
						<div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
							<h3 className='text-xl font-medium mb-3'>
								Documentación Oficial
							</h3>
							<p className='text-gray-400 mb-4'>
								Accede Link nuestra documentación completa para aprender Link
								fondo sobre NebulaGhost.
							</p>
							<Link href='#' className='text-indigo-500 hover:underline'>
								Explorar
							</Link>
						</div>

						{/* <!-- Herramienta 3 --> */}
						<div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
							<h3 className='text-xl font-medium mb-3'>
								Comunidad de Desarrolladores
							</h3>
							<p className='text-gray-400 mb-4'>
								Únete Link nuestra comunidad en línea para discutir ideas y
								resolver problemas juntos.
							</p>
							<Link href='#' className='text-indigo-500 hover:underline'>
								Únete
							</Link>
						</div>

						{/* <!-- Herramienta 4 --> */}
						<div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
							<h3 className='text-xl font-medium mb-3'>
								Herramientas de Depuración
							</h3>
							<p className='text-gray-400 mb-4'>
								Utiliza nuestras herramientas de depuración para identificar
								errores en tu código.
							</p>
							<Link href='#' className='text-indigo-500 hover:underline'>
								Ver Herramientas
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
