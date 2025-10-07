import React from 'react';
import Navbar from '../Componets/Navbar';
import Footer from '../Componets/Footer';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError()
     
    return (
      <>
        <Navbar />
        <div>
          <main className="grid h-svh  place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="text-white text-3xl font-semibold">
                {error.message}
              </p>
              <p className="text-8xl font-bold text-indigo-400">404</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Page not found
              </h1>
            </div>
          </main>
        </div>
        <Footer />
      </>
    );
};

export default ErrorPage;