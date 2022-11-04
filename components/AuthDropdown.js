import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function AuthDropdown() {
	return (
		<Menu as="div" className="relative inline-block text-left mr-2">
			<div>
				<Menu.Button className="h-10 inline-flex w-full items-center justify-center rounded-md  ring-gray-400 bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:ring-2 focus:outline-none focus:ring-2 transition-all duration-300 ">
					Account
					<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-500 rounded-md bg-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<Menu.Item>
							<p
								className={classNames(
									'text-white',
									'block px-4 py-2 text-sm font-medium'
								)}
							>
								Ben Ryan
							</p>
						</Menu.Item>
						<Menu.Item>
							<p
								className={classNames(
									'text-white',
									'block px-4 py-2 text-sm font-medium'
								)}
							>
								benryan@gmail.com
							</p>
						</Menu.Item>
					</div>

					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={classNames(
										active ? 'bg-gray-500 text-white' : 'text-white',
										'block px-4 py-2 text-sm'
									)}
								>
									Sign out
								</a>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

export default AuthDropdown;
