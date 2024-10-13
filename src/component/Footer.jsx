import Icon from '../images/logo1.png'
const Footer = () => {
    return (
      <div>
        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-start lg:gap-8">
              <div className="text-teal-600 dark:text-teal-300">
                <img src={Icon} alt="footer" className='h-8 w-12' />
              </div>
  
              <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
                {/* News Signup */}
                <div className="col-span-2">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Get the latest news!
                    </h2>
  
                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Esse non cupiditate quae nam molestias.
                    </p>
                  </div>
                </div>
  
                {/* Signup Form */}
                <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                  <form className="w-full">
                    <label htmlFor="UserEmail" className="sr-only"> Email </label>
  
                    <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 dark:border-gray-800">
                      <input
                        type="email"
                        id="UserEmail"
                        placeholder="john@rhcp.com"
                        className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm dark:bg-gray-900 dark:text-white"
                      />
  
                      <button className="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
  
                {/* Other Sections */}
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-medium text-gray-900 dark:text-white">
                    Services
                  </p>
  
                  <ul className="mt-6 space-y-4 text-sm">
                    <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">1on1 Coaching</a></li>
                    <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">Company Review</a></li>
                    <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">Accounts Review</a></li>
                    <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">HR Consulting</a></li>
                  </ul>
                </div>
  
                {/* Legal */}
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-medium text-gray-900 dark:text-white">
                    Legal
                  </p>
  
                  <ul className="mt-6 space-y-4 text-sm">
                    <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">Terms & Conditions</a></li>
                    <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">Licensing</a></li>
                    <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">Cookie Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  