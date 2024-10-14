import React, { useState } from 'react';

const BlogPost = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  // Limit content to 30 characters for "See More" functionality
  const limitedContent = content.length > 100 ? content.substring(0, 100) : content;

  return (
    <div className="border p-4 mb-4 rounded-lg shadow-md max-w-5xl mx-auto">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className={`text-gray-700 ${isExpanded ? 'block' : 'line-clamp-3'}`}>
        {isExpanded ? content : limitedContent + (content.length > 100 ? '... ' : '')}
        {!isExpanded && content.length > 100 && (
          <span className="text-blue-500 cursor-pointer" onClick={toggleContent}>
            See More
          </span>
        )}
      </p>
      {isExpanded && (
        <button className="text-blue-500 mt-2" onClick={toggleContent}>
          See Less
        </button>
      )}
    </div>
  );
};

const BlogList = () => {
  const blogPosts = [
    {
      title: 'The Importance of Quality in Agriculture',
      content: 'At Aplura GmbH, we believe that quality is paramount. Our rigorous testing ensures that every product meets the highest standards. This dedication to quality not only benefits our customers but also helps them maintain their reputation in the market. We understand that high-quality products can lead to better yields and profitability for our clients, ensuring their long-term success. Our commitment extends beyond products; we aim to educate our partners about best practices in quality management to foster a culture of excellence within the agricultural sector.',
    },
    {
      title: 'Exploring the Global Potato Market',
      content: 'Potatoes are a staple in many diets worldwide. Aplura GmbH specializes in supplying premium-grade potatoes for chip production. Understanding the dynamics of the global potato market can help manufacturers make informed choices, optimize their supply chains, and meet consumer demands effectively. Our research team regularly analyzes market trends, including pricing and consumer preferences, to provide valuable insights to our partners. By staying ahead of the curve, we empower our clients to make strategic decisions that enhance their competitive edge in the ever-evolving agricultural landscape.',
    },
    {
      title: 'The Role of Yellow Corn in Tortilla Manufacturing',
      content: 'Yellow corn is essential for tortilla production. At Aplura, we source high-quality corn to ensure excellent texture and flavor in every batch. Our commitment to quality means we work closely with trusted suppliers who share our values, ensuring that each kernel meets our high standards. We understand the importance of consistent quality in food products, and our expertise in sourcing helps our clients maintain their production schedules. Additionally, we continuously monitor market trends to provide our clients with the best options for their manufacturing needs, ensuring they stay competitive in the food industry.',
    },
    {
      title: 'The Benefits of Disease-Resistant Potato Seeds',
      content: 'Investing in disease-resistant potato seeds is crucial for high yield and sustainable farming. Aplura GmbH offers premium seeds tailored for the AMEA region and South America. These seeds are developed through rigorous research and testing, ensuring they can withstand common pests and diseases that threaten crops. By choosing disease-resistant varieties, farmers can reduce their reliance on chemical treatments, promoting healthier ecosystems. Our team provides ongoing support and information to help growers maximize their yields and profitability, while also contributing to the sustainability of agricultural practices in their regions, ultimately leading to increased food security for communities.',
    },
    {
      title: 'Logistics and Compliance in International Trade',
      content: 'Navigating international logistics can be challenging. Aplura GmbH has extensive expertise in managing these processes, ensuring timely and compliant delivery. Our logistics team is well-versed in the complexities of customs regulations, allowing us to navigate potential obstacles effectively. We prioritize transparency in our operations, keeping our clients informed throughout the shipping process. With a focus on sustainability, we continuously seek innovative solutions to minimize our environmental impact while maintaining high service standards. Our strong partnerships with reliable carriers ensure that your shipments arrive safely and efficiently, regardless of destination, thus enhancing our global presence.',
    },
    {
      title: 'Customer Testimonials: Real Stories from Our Partners',
      content: 'Hear from our clients about their experiences with Aplura GmbH. Our commitment to quality and service has made a significant impact on their businesses. Our clients often share how our products have helped them improve their production processes, increase their market reach, and enhance their overall profitability. By prioritizing customer satisfaction, we have built a loyal client base that appreciates our dedication and support. We believe in fostering partnerships that go beyond transactions, ensuring our clients feel valued and supported throughout their journey with us. Our testimonials highlight our collaborative spirit and success stories that inspire new partners to join us.',
    },
    {
      title: 'Agricultural Trends: What to Watch for in 2024',
      content: 'As we move into 2024, various agricultural trends are emerging. Understanding these trends is crucial for staying competitive in the market. From the rise of precision agriculture and sustainable practices to the increasing demand for organic products, farmers must adapt to changing consumer preferences. At Aplura GmbH, we are committed to staying ahead of these trends and providing our partners with the resources they need to thrive. Our team regularly conducts market research to identify new opportunities and challenges, ensuring that our clients are well-prepared to navigate the evolving landscape of agriculture and embrace new technologies that drive efficiency.',
    },
    {
      title: 'The Advantages of Working with Aplura GmbH',
      content: 'Choosing the right agricultural supplier is essential. Aplura GmbH stands out due to our commitment to quality, customer service, and global reach. Our extensive network of trusted partners allows us to offer a diverse range of products tailored to meet specific needs. We pride ourselves on our responsive customer service, ensuring that our clients receive prompt assistance and support. Additionally, our dedication to sustainable practices sets us apart, as we actively work to reduce our environmental footprint while delivering exceptional products. We strive to be more than just a supplier; we aim to be a trusted partner in your success, sharing our expertise to foster mutual growth.',
    },
    {
      title: 'The Future of Sustainable Agriculture',
      content: 'Sustainable agriculture is not just a trend; it\'s the future. Aplura GmbH is dedicated to promoting sustainable practices in the agriculture sector. Our initiatives focus on responsible sourcing, minimizing waste, and reducing carbon emissions throughout the supply chain. By investing in innovative technologies and methods, we aim to support farmers in adopting sustainable practices that benefit both their operations and the environment. We believe that sustainability is key to ensuring food security for future generations, and we are committed to leading the charge toward a more sustainable agricultural landscape. Our goal is to inspire others to join us in this vital movement for the planet.',
    },
    {
      title: 'Connecting with Aplura: How to Reach Us',
      content: 'At Aplura GmbH, we encourage potential clients to reach out for inquiries or to discuss their needs. Our team is here to help! We offer various channels for communication, including email, phone, and social media, ensuring you can easily connect with us. Our dedicated customer service representatives are trained to assist with any questions you may have, whether about our products or services. We value every inquiry and strive to provide prompt and informative responses. Your satisfaction is our priority, and we look forward to collaborating with you to meet your agricultural needs and support your business growth in the competitive market.',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {blogPosts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default BlogList;
