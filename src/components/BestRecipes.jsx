import React from 'react';

const BestRecipes = () => {
  const recipes = [
    {
      title: 'Butter Chicken',
      image: 'https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--750x750.jpg',
      description: 'A classic Indian dish made with tender chicken cooked in a rich and creamy tomato-based sauce.',
    },
    {
      title: 'Biryani',
      image: 'https://images.food52.com/7f0yncraWeYUJG_lLbH2ie1xd6g=/2016x1344/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg',
      description: 'A flavorful rice dish cooked with aromatic spices, meat (such as chicken or mutton), and vegetables.',
    },
    {
      title: 'Paneer Tikka',
      image: 'https://www.cookwithkushi.com/wp-content/uploads/2023/02/tandoori_paneer_tikka_restaurant_style.jpg',
      description: 'Grilled cottage cheese marinated in spices and served with mint chutney.',
    },
    {
      title: 'Masala Dosa',
      image: 'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg',
      description: 'A popular South Indian dish consisting of a crispy fermented crepe filled with spiced potato filling.',
    },
    {
      title: 'Chole Bhature',
      image: 'https://i1.wp.com/geteasycooking.com/wp-content/uploads/2022/04/chole-bhature.00_07_55_08.Still004_ddds.jpg?resize=1024%2C576&ssl=1',
      description: 'A delicious combination of spicy chickpea curry (chole) and deep-fried bread (bhature).',
    },
    {
      title: 'Gulab Jamun',
      image: 'https://www.cookingcarnival.com/wp-content/uploads/2020/10/Gulab-jamun.jpg',
      description: 'Soft and syrupy milk-based dessert balls flavored with cardamom and rosewater.',
    },
  ];

  return (
    <section className="py-16">
        <h1 className="text-center text-5xl font-black my-8">
        Best <span className="border-b-4 border-orange-500">Recipes</span>
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="rounded shadow p-4">
              <img src={recipe.image} alt={recipe.title} className="mb-4 rounded" />
              <h3 className="text-lg font-bold mb-2">{recipe.title}</h3>
              <p className="">{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestRecipes;
