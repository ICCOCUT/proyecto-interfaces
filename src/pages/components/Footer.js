import Link from 'next/link';

function Header() {
	return (
		<footer class='bg-gray-800 text-gray-400'>
			<div class='container mx-auto py-8'>
				<div class='flex flex-wrap -mb-4  justify-center'>
					<div class='lg:w-1/4 md:w-1/2 w-full px-4 mb-4'>
						<h2 class='text-sm font-medium mb-3'>Aprende</h2>
						<nav class='list-none'>
							<li>
								<Link href='/aprende' class='hover:text-white'>
									Documentación
								</Link>
							</li>
						</nav>
					</div>
					<div class='lg:w-1/4 md:w-1/2 w-full px-4 mb-4'>
						<h2 class='text-sm font-medium mb-3'>Ecosistema</h2>
						<nav class='list-none'>
							<li>
								<Link href='/herramientas' class='hover:text-white'>
									Herramientas
								</Link>
							</li>
						</nav>
					</div>
					<div class='lg:w-1/4 md:w-1/2 w-full px-4 mb-4'>
						<h2 class='text-sm font-medium mb-3'>Acerca</h2>
						<nav class='list-none'>
							<li>
								<Link href='/historia' class='hover:text-white'>
									Historia
								</Link>
							</li>
						</nav>
					</div>
					<div class='lg:w-1/4 md:w-1/2 w-full px-4 mb-4'>
						<h2 class='text-sm font-medium mb-3'>Comunidad</h2>
						<nav class='list-none'>
							<li>
								<Link href='/eventos' class='hover:text-white'>
									Eventos
								</Link>
							</li>
						</nav>
					</div>
				</div>
			</div>
			<div class='bg-gray-700 bg-opacity-75'>
				<div class='container mx-auto py-4 px-4 flex flex-wrap items-center justify-center'>
					<p class='text-sm text-gray-400 text-center sm:text-left'>
						&copy; 2023 NebulaGhost —
						<Link
							href='https://github.com/Fufinop'
							class='text-gray-500 ml-1 hover:text-white'
							target='_blank'
							rel='noopener noreferrer'>
							@Fufinop
						</Link>
					</p>
					<p class='text-sm text-gray-400 text-center sm:text-left'>
						<Link
							href='https://github.com/Fernando-droidx'
							class='text-gray-500 ml-1 hover:text-white'
							target='_blank'
							rel='noopener noreferrer'>
							@Fernando-droidx
						</Link>
					</p>
					<div class='sm:w-auto w-full mt-2 flex justify-center sm:justify-start'>
						<Link
							href='#'
							class='text-gray-400 mx-2'
							target='_blank'
							rel='noopener noreferrer'>
							<i class='fab fa-facebook'></i>
						</Link>
						<Link
							href='#'
							class='text-gray-400 mx-2'
							target='_blank'
							rel='noopener noreferrer'>
							<i class='fab fa-twitter'></i>
						</Link>
						<Link
							href='#'
							class='text-gray-400 mx-2'
							target='_blank'
							rel='noopener noreferrer'>
							<i class='fab fa-instagram'></i>
						</Link>
						<Link href='mailto:tu@email.com' class='text-gray-400 mx-2'>
							<i class='fas fa-envelope'></i>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Header;
