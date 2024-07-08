import React from 'react';

const About = () => {
  return (
    <div>
      <div className="bg-white">
        {/* Company History */}
        <header className="bg-green-500 text-white text-center py-12">
          <h1 className="text-4xl font-bold mt-16">Company History</h1>
        </header>

        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">About Tsega Jam</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Tsega Jam specializes in crafting delightful cactus jams and refreshing snack juices, inspired by the rich flavors of the desert. Established with a passion for quality and taste, we are committed to bringing you the essence of natures bounty in every jar and bottle.
          </p>
        </section>

        {/* Mission and Vision */}
        <section className="bg-green-500 text-white py-12 px-4">
          <h2 className="text-2xl font-bold text-center">Mission and Vision</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Our mission is to enrich lives by offering premium products that nourish and delight, while our vision is to become a trusted global brand synonymous with health, taste, and sustainability.
          </p>
        </section>

        {/* Team Members with Bios and Photos */}
        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {/* Team Member 1 */}
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <img src="team_member1.jpg" alt="Team Member 1" className="mx-auto rounded-full w-24 h-24 mb-4" />
              <h3 className="text-xl font-bold">Kebede Adanew</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique mi.</p>
            </div>
            {/* Team Member 2 */}
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <img src="team_member2.jpg" alt="Team Member 2" className="mx-auto rounded-full w-24 h-24 mb-4" />
              <h3 className="text-xl font-bold">Seble Ayanaw</h3>
              <p className="text-gray-700">Nullam ac augue eget diam posuere vehicula. Vivamus quis nulla ac justo euismod posuere.</p>
            </div>
            {/* Team Member 3 */}
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <img src="team_member3.jpg" alt="Team Member 3" className="mx-auto rounded-full w-24 h-24 mb-4" />
              <h3 className="text-xl font-bold">Tesga Demlash</h3>
              <p className="text-gray-700">Fusce tincidunt, arcu nec vestibulum tincidunt, eros massa ullamcorper urna.</p>
            </div>
            {/* Team Member 4 */}
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <img src="team_member4.jpg" alt="Team Member 4" className="mx-auto rounded-full w-24 h-24 mb-4" />
              <h3 className="text-xl font-bold">Meron G/Hiwot</h3>
              <p className="text-gray-700">Phasellus nec consectetur lectus, sit amet consectetur lorem.</p>
            </div>
          </div>
        </section>

        {/* We Promise Section */}
        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Our Promise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Quality Assurance</h3>
              <p className="text-gray-700">We promise to uphold the highest standards in product quality and safety.</p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Customer Satisfaction</h3>
              <p className="text-gray-700">We are committed to ensuring our customers satisfaction with every purchase.</p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Sustainable Practices</h3>
              <p className="text-gray-700">We pledge to use eco-friendly practices to minimize our environmental footprint.</p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Sustainable Practices</h3>
              <p className="text-gray-700">We pledge to use eco-friendly practices to minimize our environmental footprint.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;