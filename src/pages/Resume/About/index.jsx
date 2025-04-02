import AnimatedTitle from "@/components/common/AnimatedTitle.jsx";
// import avatar from "@/assets/img/photo.jpg";
const photos = [
  { image: "/img/about/img01.jpg" },
  { image: "/img/about/img03.jpg" },
  { image: "/img/about/img02.jpg" },
  { image: "/img/about/img04.jpg" },
];
const food = [
  { image: "/img/about/img05.jpg" },
  { image: "/img/about/img06.jpg" },
  { image: "/img/about/img07.jpg" },
  { image: "/img/about/img08.jpg" },
];

export default function About() {
  return (
    <div className=" bg-gray-100 min-h-screen py-12">
      {/* Header Section */}
      {/* <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700">Personal Overview</h1>
      </section> */}
      <div className="container mx-auto px-12">
        <AnimatedTitle title="Personal Overview" />

        <div className="bg-whitish mt-8 rounded-xl p-16">
          {/* About Me Section */}
          <section>
            <h2 className="heading3 font-bold text-klein-900">About Me</h2>
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-3/5 mb-6 lg:mb-0  p-24">
                <p className="heading3  mb-4">
                  👋 Hello! I'm Juan. A goal-driven, fast learner, and
                  detail-oriented web designer and coder, currently based in
                  Vancouver, BC.
                </p>
                <p className="heading3">
                  I’m passionate about creating seamless, user-focused digital
                  experiences. Combining creative vision with technical
                  expertise, I specialize in HTML, CSS, JavaScript, Vue, and
                  React, crafting solutions that balance functionality with
                  aesthetic appeal.
                </p>
              </div>
              <div className="lg:w-2/7 flex flex-col items-center">
                <img
                  src="/img/photo.jpg"
                  alt="portrait"
                  className="rounded-full mb-4 "
                />
                <a href="#" className="btn mt-8">
                  Download my CV
                </a>
              </div>
            </div>
          </section>

          {/* Images Section */}
          <section>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
              {photos.map((photo, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={photo.image}
                    alt={photo.index}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* My Values Section */}
          <section>
            <h2 className="heading3 font-bold text-klein-900 my-16">
              My Value
            </h2>
            <div className="grid sm:grid-cols-3 gap-16">
              <div className="p-12  rounded-lg border-klein-900 border-2">
                <h3 className="heading3 font-bold text-center text-klein-900 mb-8">
                  Faith & Compassion
                </h3>
                <p className="heading4">
                  As a Christian, my faith shapes my perspective on life and
                  work. It guides me to approach challenges with resilience and
                  hope, while inspiring me to treat others with kindness and
                  empathy. Faith reinforces my commitment to integrity, ensuring
                  I stay true to my values, fostering trust, and building
                  authentic connections with those around me.
                </p>
              </div>
              <div className="p-12 rounded-lg border-klein-900 border-2">
                <h3 className="heading3 font-bold text-center text-klein-900 mb-8">
                  Continuous Growth
                </h3>
                <p className="heading4">
                  I am committed to lifelong learning and growth, with a primary
                  focus on front-end development and design. As I continue to
                  refine my expertise in these areas, I’m excited to expand my
                  knowledge and skills, including exploring back-end
                  development. This continuous growth drives me to stay ahead of
                  emerging technologies, ensuring I can deliver innovative and
                  well-rounded solutions.
                </p>
              </div>
              <div className="p-12 rounded-lg border-klein-900 border-2">
                <h3 className="heading3 font-bold text-center text-klein-900 mb-8">
                  Empowering Others
                </h3>
                <p className="heading4">
                  I value the ability to use my skills to support and uplift
                  others. We are not alone in this world—our actions and efforts
                  create ripples that affect those around us. Whether through
                  collaborative teamwork, sharing knowledge, or crafting designs
                  that inspire and make a positive impact, I believe in
                  fostering meaningful experiences that benefit everyone.
                </p>
              </div>
            </div>
          </section>

          {/* My Hobbies Section */}
          <section>
            <h2 className="heading3 font-bold text-klein-900 my-16">
              My Hobbies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {food.map((food, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={food.image}
                    alt={food.index}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <p className="heading3 mb-4">
              Beyond my passion for web design and development, I find immense
              joy in two hobbies that deeply influence my perspective and
              creativity: cooking and hiking.
            </p>
            <p className="heading3 mb-4">
              Cooking has taught me invaluable lessons about balance, precision,
              and artistry. In the kitchen, I’ve learned to understand flavors,
              blend them harmoniously, and create dishes that are as visually
              appealing as they are delicious. It’s also an excellent way to
              sharpen skills like time management, organization, and empathy by
              understanding the tastes and preferences of others. My favorite
              part of cooking is the presentation—turning a meal into a work of
              art.
            </p>
            <p className="heading3 mb-4">
              During holidays, I love hiking with friends. Exploring nature
              challenges my physical limits, provides a sense of accomplishment,
              and keeps me energized. I always carry my tripod and camera to
              capture breathtaking views along the way. Sharing these moments
              with friends strengthens our bonds, and many of the photos I take
              inspire or directly feature in my design projects.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
