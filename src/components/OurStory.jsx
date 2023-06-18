import React from 'react';

const OurStory = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h1 className="text-3xl font-bold mb-4">OUR STORY</h1>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <p className="text-lg mb-4">
              Foodie is a recipe website dedicated to providing delicious and easy-to-follow recipes for food enthusiasts. We believe that cooking should be fun, creative, and accessible to everyone.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <p className="text-lg mb-4">
              Our team of experienced chefs and passionate food lovers curates a wide range of recipes, from quick weeknight meals to gourmet delights. We aim to inspire and empower individuals to explore the joy of cooking and experiment with flavors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
