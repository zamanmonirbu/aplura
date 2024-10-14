import React, { useState } from 'react';

const BlogPost = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="border p-4 mb-4 rounded-lg shadow-md">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className={`text-gray-700 ${isExpanded ? 'block' : 'line-clamp-3'}`}>
        {content}
      </p>
      <button
        className="text-blue-500 mt-2"
        onClick={toggleContent}
      >
        {isExpanded ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

const BlogList = () => {
  const blogPosts = [
    {
      title: 'The Importance of Quality in Agriculture',
      content: 'At Aplura GmbH, we believe that quality is paramount. Our rigorous testing ensures that every product meets the highest standards. This dedication to quality not only benefits our customers but also helps them maintain their reputation in the market...',
    },
    {
      title: 'Exploring the Global Potato Market',
      content: 'Potatoes are a staple in many diets worldwide. Aplura GmbH specializes in supplying premium-grade potatoes for chip production. Understanding the dynamics of the global potato market can help manufacturers make informed choices...',
    },
    {
      title: 'The Role of Yellow Corn in Tortilla Manufacturing',
      content: 'Yellow corn is essential for tortilla production. At Aplura, we source high-quality corn to ensure excellent texture and flavor in every batch...',
    },
    {
      title: 'The Benefits of Disease-Resistant Potato Seeds',
      content: 'Investing in disease-resistant potato seeds is crucial for high yield and sustainable farming. Aplura GmbH offers premium seeds tailored for the AMEA region and South America...',
    },
    {
      title: 'Logistics and Compliance in International Trade',
      content: 'Navigating international logistics can be challenging. Aplura GmbH has extensive expertise in managing these processes, ensuring timely and compliant delivery...',
    },
    {
      title: 'Customer Testimonials: Real Stories from Our Partners',
      content: 'Hear from our clients about their experiences with Aplura GmbH. Our commitment to quality and service has made a significant impact on their businesses...',
    },
    {
      title: 'Agricultural Trends: What to Watch for in 2024',
      content: 'As we move into 2024, various agricultural trends are emerging. Understanding these trends is crucial for staying competitive in the market...',
    },
    {
      title: 'The Advantages of Working with Aplura GmbH',
      content: 'Choosing the right agricultural supplier is essential. Aplura GmbH stands out due to our commitment to quality, customer service, and global reach...',
    },
    {
      title: 'The Future of Sustainable Agriculture',
      content: 'Sustainable agriculture is not just a trend; it\'s the future. Aplura GmbH is dedicated to promoting sustainable practices in the agriculture sector...',
    },
    {
      title: 'Connecting with Aplura: How to Reach Us',
      content: 'At Aplura GmbH, we encourage potential clients to reach out for inquiries or to discuss their needs. Our team is here to help!...',
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
