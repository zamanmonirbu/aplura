import { FaQuestionCircle, } from 'react-icons/fa';

const ExploreMore = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-around text-[#10375C]">
          {/* FAQ Section */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-between">
              <div>
                <FaQuestionCircle className="text-4xl text-green-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-left">FAQ</h3>
                <p className="text-gray-700 mb-4">
                  Have questions? Check our FAQ section for quick answers to common queries and concerns.
                </p>
              </div>
              <a href="/faq" className="text-green-500 hover:underline mt-4">Learn More</a>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
