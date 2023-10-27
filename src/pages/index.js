import Image from 'next/image';
import Nebulosa from './components/Nebulosa';

export default function Home() {
	return (
		<main>
			{/* <Nebulosa /> */}
			<section className='text-gray-400 body-font bg-gray-900'>
				<div className='container mx-auto flex flex-wrap items-center justify-center py-12'>
					<Image
						className='w-1/2 mb-10 object-cover object-center rounded'
						width={600}
						height={400}
						src='/Astronauta.svg'
						alt='Astronauta'
					/>
					<div className='text-center w-full'>
						<h1 className='text-4xl font-medium text-white mb-4'>
							Únete a nuestra comunidad
						</h1>
						<p className='text-lg leading-relaxed mb-8'>
							Descubre NebulaGhost, el lenguaje de programación basado en el
							espacio que está revolucionando la forma en que desarrollamos
							software. Únete a una comunidad global de desarrolladores y
							exploradores espaciales.
						</p>
						<a
							href='#registrate'
							className='bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded-full text-lg transition duration-300'>
							Regístrate
						</a>
					</div>
				</div>
			</section>

			<section id='registrate' className='bg-gray-800 py-16'>
				<div className='container mx-auto text-center'>
					<h2 className='text-3xl text-white font-medium mb-6'>
						Regístrate ahora
					</h2>
					<p className='text-lg text-gray-400 mb-8'>
						Únete a NebulaGhost y comienza tu viaje de programación espacial.
					</p>
					{/* <!-- Formulario de Registro --> */}
					<form action='#' method='post' className='max-w-sm mx-auto'>
						<div className='mb-4'>
							<input
								type='text'
								name='nombre'
								placeholder='Nombre'
								className='w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500'
								required
							/>
						</div>
						<div className='mb-4'>
							<input
								type='email'
								name='email'
								placeholder='Correo Electrónico'
								className='w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500'
								required
							/>
						</div>
						<button
							type='submit'
							className='w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded-full text-lg transition duration-300'>
							Registrarse
						</button>
					</form>
				</div>
			</section>
		</main>
	);
}
