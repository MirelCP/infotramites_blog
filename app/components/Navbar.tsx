"use client";

import { useState } from "react";
import Link from 'next/link';
import ThemeButton from './ThemeButton';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center justify-between w-full">
                    <Link href="/" className="text-2xl font-medium cursor-pointer">
                        Info Tramites <span className="text-teal-500">Blog</span>
                    </Link>

                    <div className="sm:hidden">
                        <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                            {isMobileMenuOpen ? (
                                // Icono para cerrar el menú móvil
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Icono para abrir el menú móvil
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <nav className="hidden sm:block">
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-teal-500">Inicio</Link>
                            </li>
                            <li className="relative">
                                <button onClick={toggleDropdown} className="text-gray-600 hover:text-teal-500 focus:outline-none flex items-center">
                                    Artículos
                                    {/* Icono de flecha para el menú desplegable */}
                                    <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-1">
                                        {/* Links del menú desplegable */}
                                        <Link href="/categoria/documentos-administrativos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Documentos Administrativos</Link>
                                        <Link href="/categoria/tramites-especificos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Trámites Específicos</Link>
                                        <Link href="/categoria/consejos-recomendaciones" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Consejos y Recomendaciones</Link>
                                        <Link href="/categoria/legislacion-normativas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Legislación y Normativas</Link>
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link href="/contacto" className="text-gray-600 hover:text-teal-500">Contacto</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {isMobileMenuOpen && (
                <nav className="absolute top-16 left-0 right-0 bg-white shadow-lg z-10 rounded-md py-1 sm:hidden">
                    <ul className="space-y-1">
                        <li>
                            <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Inicio</Link>
                        </li>
                        <li>
                                    <button 
                                        onClick={toggleDropdown}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left justify-between items-center"
                                    >
                                        Artículos
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="pl-4 pr-4 pb-2">
                                            <Link href="/categoria/documentos-administrativos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Documentos Administrativos</Link>
                                            <Link href="/categoria/tramites-especificos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Trámites Específicos</Link>
                                            <Link href="/categoria/consejos-recomendaciones" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Consejos y Recomendaciones</Link>
                                            <Link href="/categoria/legislacion-normativas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Legislación y Normativas</Link>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link href="/contacto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contacto</Link>
                                </li>
                    </ul>
                </nav>
            )}

            <ThemeButton />
        </div>
    );
}
