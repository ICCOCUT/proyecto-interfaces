import Link from 'next/link';

function Header() {
	return (
		<footer className='bg-gray-800 text-gray-400'>
			<div className='container mx-auto py-8'>
				<div className='flex flex-wrap -mb-4  justify-center'>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4 mb-4'>
						<h2 className='text-sm font-medium mb-3'>Aprende</h2>
						<nav className='list-none'>
							<li>
								<Link href='/aprende' className='hover:text-white'>
									Documentación
								</Link>
							</li>
						</nav>
					</div>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4 mb-4'>
						<h2 className='text-sm font-medium mb-3'>Ecosistema</h2>
						<nav className='list-none'>
							<li>
								<Link href='/herramientas' className='hover:text-white'>
									Herramientas
								</Link>
							</li>
						</nav>
					</div>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4 mb-4'>
						<h2 className='text-sm font-medium mb-3'>Acerca</h2>
						<nav className='list-none'>
							<li>
								<Link href='/historia' className='hover:text-white'>
									Historia
								</Link>
							</li>
						</nav>
					</div>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4 mb-4'>
						<h2 className='text-sm font-medium mb-3'>Comunidad</h2>
						<nav className='list-none'>
							<li>
								<Link href='/eventos' className='hover:text-white'>
									Eventos
								</Link>
							</li>
						</nav>
					</div>
				</div>
			</div>
			<div className='bg-gray-700 bg-opacity-75'>
				<div className='container mx-auto py-4 px-4 flex flex-wrap items-center justify-center'>
					<p className='text-sm text-gray-400 text-center sm:text-left'>
						&copy; 2023 NebulaGhost —
						<Link
							href='https://github.com/Fufinop'
							className='text-gray-500 ml-1 hover:text-white'
							target='_blank'
							rel='noopener noreferrer'>
							@Fufinop
						</Link>
					</p>
					<p className='text-sm text-gray-400 text-center sm:text-left'>
						<Link
							href='https://github.com/Fernando-droidx'
							className='text-gray-500 ml-1 hover:text-white'
							target='_blank'
							rel='noopener noreferrer'>
							@Fernando-droidx
						</Link>
					</p>
					<div className='sm:w-auto w-full mt-2 flex justify-center sm:justify-start'>
						<Link
							href='#'
							className='text-gray-400 mx-2'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-facebook'></i>
						</Link>
						<Link
							href='#'
							className='text-gray-400 mx-2'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-twitter'></i>
						</Link>
						<Link
							href='#'
							className='text-gray-400 mx-2'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-instagram'></i>
						</Link>
						<Link href='mailto:tu@email.com' className='text-gray-400 mx-2'>
							<i className='fas fa-envelope'></i>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Header;
