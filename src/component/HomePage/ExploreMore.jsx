import { FaBlog, FaQuestionCircle, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ExploreMore = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#10375C]">Explore More</h2>
        <div className="flex flex-wrap justify-around text-[#10375C]">
          {/* Blog Section */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-between">
              <div>
                <FaBlog className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Blog</h3>
                <p className="text-gray-700 mb-4">
                  Stay updated with the latest news and insights from the agriculture industry through our informative blog posts.
                </p>
              </div>
              <a href="/blog" className="text-blue-500 hover:underline mt-4">Read More</a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-between">
              <div>
                <FaQuestionCircle className="text-4xl text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">FAQ</h3>
                <p className="text-gray-700 mb-4">
                  Have questions? Check our FAQ section for quick answers to common queries and concerns.
                </p>
              </div>
              <a href="/faq" className="text-green-500 hover:underline mt-4">Learn More</a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                <p className="text-gray-700 mb-4">
                  Connect with us on social media for updates and community engagement.
                </p>
                <div className="flex justify-center space-x-4 mb-4">
                  <a href="https://www.facebook.com/Aplura" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-blue-600 text-3xl" />
                  </a>
                  <a href="https://twitter.com/Aplura" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-blue-400 text-3xl" />
                  </a>
                  <a href="https://www.instagram.com/Aplura" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-pink-500 text-3xl" />
                  </a>
                  <a href="https://www.linkedin.com/company/aplura" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-blue-700 text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
