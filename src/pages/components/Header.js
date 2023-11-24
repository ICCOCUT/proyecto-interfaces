import Link from 'next/link';

function Header() {
	return (
		<header className='bg-gray-800 py-4 w-full'>
			<div className='container mx-auto flex flex-wrap items-center justify-between'>
				<Link href='/' className='flex items-center text-2xl'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						className='w-10 h-10 p-2 bg-indigo-500 rounded-full text-white'
						viewBox='0 0 24 24'>
						<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
					</svg>
					<span className='ml-3 text-white'>NebulaGhost</span>
				</Link>
				<nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
					<Link
						href='/aprende'
						className='mr-5 text-gray-100 hover:text-gray-300'>
						Aprende
					</Link>
					<Link
						href='/herramientas'
						className='mr-5 text-gray-100 hover:text-gray-300'>
						Ecosistema
					</Link>
					<Link
						href='/historia'
						className='mr-5  text-gray-100 hover:text-gray-300'>
						Acerca
					</Link>
					<Link
						href='/eventos'
						className='mr-5  text-gray-100 hover:text-gray-300'>
						Comunidad
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;
