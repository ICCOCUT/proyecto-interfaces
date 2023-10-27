export default function aprende() {
	return (
		<main className='bg-gray-900 text-white'>
			<div className='text-gray-400 body-font bg-gray-900'>
				<div className='container mx-auto flex flex-wrap items-center justify-center py-12'>
					<h1 className='text-4xl font-medium text-white mb-4'>
						Tutoriales de NebulaGhost
					</h1>
					<p className='text-lg leading-relaxed mb-8 text-center'>
						Explora nuestra colección de tutoriales para dominar NebulaGhost, el
						lenguaje de programación espacial. Aprende a escribir código en el
						espacio exterior.
					</p>
				</div>
			</div>

			{/* Ejemplo de tutorial 1 con video de YouTube */}
			<div className='mb-8 bg-gray-900 text-white'>
				<h3 className='text-2xl font-medium mb-3 text-center'>
					Tutorial 1: &ldquo;Hola Mundo&rdquo; en NebulaGhost
				</h3>
				<p className='text-lg text-center'>
					En este tutorial, te mostraremos cómo escribir tu primer programa en
					NebulaGhost. Verás cómo imprimir &ldquo;Hola, Mundo&rdquo; en el
					espacio.
				</p>
				<div className='w-full max-w-sm mx-auto'>
					<div className='relative' style={{ paddingBottom: '56.25%' }}>
						<iframe
							className='absolute w-full h-full'
							src='https://www.youtube.com/embed/K4TOrB7at0Y?si=j3DhDgayUg8s7B2S'
							title='Tutorial 1'
							allowFullScreen></iframe>
					</div>
				</div>
			</div>

			{/* Ejemplo de tutorial 2 con video de YouTube */}
			<div className='mb-8'>
				<h3 className='text-2xl font-medium mb-3 text-center'>
					Tutorial 2: Variables y Operadores
				</h3>
				<p className='text-lg text-center'>
					Aprende a trabajar con variables y operadores en NebulaGhost. Descubre
					cómo realizar cálculos y almacenar datos en el espacio.
				</p>
				<div className='w-full max-w-sm mx-auto'>
					<div className='relative' style={{ paddingBottom: '56.25%' }}>
						<iframe
							className='absolute w-full h-full'
							src='https://www.youtube.com/embed/K4TOrB7at0Y?si=j3DhDgayUg8s7B2S'
							title='Tutorial 2'
							allowFullScreen></iframe>
					</div>
				</div>
			</div>

			{/* Ejemplo de tutorial 3 con video de YouTube */}
			<div className=''>
				<h3 className='text-2xl font-medium mb-3 text-center'>
					Tutorial 3: Estructuras de Control
				</h3>
				<p className='text-lg text-center'>
					Explora las estructuras de control en NebulaGhost, incluyendo
					condicionales y bucles. Controla el flujo de tu programa en el
					espacio.
				</p>
				<div className='w-full max-w-sm mx-auto '>
					<div className='relative' style={{ paddingBottom: '56.25%' }}>
						<iframe
							className='absolute w-full h-full'
							src='https://www.youtube.com/embed/K4TOrB7at0Y?si=j3DhDgayUg8s7B2S'
							title='Tutorial 3'
							allowFullScreen></iframe>
					</div>
				</div>
			</div>
		</main>
	);
}
