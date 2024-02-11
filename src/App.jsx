
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  ShoppingBagIcon,
  CurrencyYenIcon,
  ShoppingCartIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  HomeIcon,
  
  XMarkIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { CiUser } from "react-icons/ci";
import { BsTicket } from "react-icons/bs";
import { MdEventRepeat } from "react-icons/md";
import {  Routes, Route ,Link, NavLink  } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Deposit from './pages/Deposit';
import Harvest from './pages/Harvest';
import BuyGold from './pages/BuyGold';
import Ticket from './pages/SellGold';
import Report from './pages/Report';
import ReceiveGold from './pages/ReceiveGold';
import Profile from './pages/Profile';
import Chat from './pages/Chat';

const navigation = [
  { name: 'داشبورد', href: '/', icon: HomeIcon, current: false },
  { name: 'واریز ', href: '/deposit', icon: CurrencyDollarIcon, current: false },
  { name: 'برداشت ', href: '/harvest', icon: ScaleIcon, current: false },
  { name: 'معاملات  طلا', href: '/buyGold', icon: ShoppingCartIcon, current: false },
  { name: 'تیکت ها', href: '/ticket', icon: BsTicket, current: false },
  { name: 'گزارش', href: '/report', icon: MdEventRepeat, current: false },
  { name: 'دریافت طلا', href: '/receive-gold', icon: CreditCardIcon, current: false }, 
  { name: 'پرفایل', href: '/profile', icon: CiUser , current: false }, 
]




// اتمام صفحات دقالت
const userNavigation = [
  { name: 'پرفایل', href: '/profile' },
  { name: 'خروج', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
import './App.css'

 function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  //const currentPath = window.location.pathname;

  return (
    <>
   
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="/img/dow.png"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                         
                         
                        </li>
                        {/* <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                          >
                            <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            Settings
                          </a>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-color1 px-6 pb-4">
            <div className="flex h-20 shrink-0 items-center mt-3 justify-between">
              <img
                className="h-20 w-auto mr-[-30px]"
                src="/img/dow.png"
                alt="Your Company"
              />
              <h3 className='text-2xl text-color2'>پارس زرگر</h3>
            </div>
       

            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <NavLink
                          to={item.href}
                          className="/group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-400 hover:text-white hover:bg-green-950"
                          
                        >
                          <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                 
                </li>
                {/* <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    Settings
                  </a>
                </li> */}
              </ul>
            </nav>
            
          </div>
        </div>

        <div className="lg:pr-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-[#eee] px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 justify-end lg:gap-x-6">
         
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

               
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="/img/photo1.avif"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span className="mr-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        میلاد فاضلیان
                      </span>
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
         
      <div>
       
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/harvest" element={<Harvest />} />
              <Route path="/buyGold" element={<BuyGold />} />
              <Route path="/ticket" element={<Ticket />} />
              <Route path="/report" element={<Report />} />
              <Route path="/receive-gold" element={<ReceiveGold />} />
              <Route path='/profile' element={<Profile />}/>
              <Route path='/ticket/chat' element={<Chat />}/>
            </Routes>
          </div>
        </main>
       
      </div>
          
        </div>
      </div>
    </>
  )
}

export default App
