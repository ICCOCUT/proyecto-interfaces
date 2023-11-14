import Image from 'next/image';

export default function historia() {
	return (
		<main>
			<section className='text-gray-400 body-font'>
				<div className='container mx-auto flex-wrap items-center justify-center py-12'>
					<h1 className='text-4xl font-medium text-gray-800 mb-4 text-center'>
						Historia de NebulaGhost
					</h1>
					<p className='text-lg leading-relaxed mb-8 text-center'>
						Descubre cómo comenzó NebulaGhost y su evolución a lo largo de los
						años.
					</p>
				</div>
				<Image
					className='mx-auto max-w-full'
					width={600}
					height={400}
					src='/img/herramientas.jpg'
					alt='Imagen de Herramientas NebulaGhost'
				/>
			</section>

			{/* <!-- Sección de Historia --> */}
			<section className='bg-gray-900 text-white py-16'>
				<div className='container mx-auto'>
					<div className='max-w-4xl mx-auto px-4'>
						<div className='mb-8'>
							<h2 className='text-3xl font-medium mb-4 text-center'>
								Orígenes de NebulaGhost
							</h2>
							<p className='text-lg text-center'>
								NebulaGhost se fundó en 20XX con la visión de proporcionar una
								plataforma de desarrollo de software innovadora y amigable. El
								equipo fundador, compuesto por apasionados desarrolladores, se
								propuso crear una herramienta que simplificara el proceso de
								creación de software.
							</p>
						</div>

						<div className='mb-8'>
							<h2 className='text-3xl font-medium mb-4 text-center'>
								Crecimiento y Expansión
							</h2>
							<p className='text-lg text-center'>
								Con el tiempo, NebulaGhost creció y se convirtió en una
								comunidad de desarrolladores dedicados. La plataforma se
								enriqueció con una amplia gama de herramientas y recursos, lo
								que la convirtió en un ecosistema completo para desarrolladores
								de software.
							</p>
						</div>

						<div>
							<h2 className='text-3xl font-medium mb-4 text-center'>
								El Presente y el Futuro
							</h2>
							<p className='text-lg text-center'>
								Hoy, NebulaGhost sigue siendo un líder en el mundo del
								desarrollo de software. Nuestro compromiso con la innovación y
								la comunidad de desarrolladores nos impulsa a seguir
								evolucionando y brindando las mejores herramientas y recursos
								posibles.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
