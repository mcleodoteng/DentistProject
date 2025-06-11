import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryFilter from "../../components/ui/CategoryFilter";
import ArticleModal from "../../components/ui/ArticleModal";

// Import components
import FAQ from "../../components/ui/FAQ";
import BlogCard from "../../components/ui/BlogCard";

// Enhanced blog data with more detailed content and full articles
const blogPosts = [
  {
    id: 1,
    title: "Essential Daily Oral Hygiene Guide",
    excerpt:
      "Master the fundamentals of oral health with our comprehensive guide to daily dental care routines.",
    category: "Oral Hygiene",
    image: "/src/assets/images/blog/oral-hygiene.jpg",
    slug: "essential-oral-hygiene-tips",
    readTime: 5,
    tags: ["Brushing", "Flossing", "Mouthwash", "Daily Routine"],
    content: (
      <>
        <h3>The Foundation of Dental Health</h3>
        <p>
          Maintaining good oral hygiene is crucial for your overall health.
          Here's your comprehensive guide to daily dental care.
        </p>

        <h4>1. Proper Brushing Technique</h4>
        <p>
          Use a soft-bristled toothbrush and fluoride toothpaste. Brush at a
          45-degree angle to your gums, using gentle circular motions. Clean all
          surfaces of your teeth, including the often-neglected back teeth.
        </p>

        <h4>2. The Importance of Flossing</h4>
        <p>
          Flossing removes plaque and food particles in places your toothbrush
          can't reach. Use about 18 inches of floss, wrapping most around your
          middle fingers and leaving 1-2 inches to work with.
        </p>

        <h4>3. Mouthwash Benefits</h4>
        <p>
          An antimicrobial mouthwash can reduce bacteria in your mouth. Use it
          after brushing and flossing for maximum benefit.
        </p>

        <h4>4. Creating a Routine</h4>
        <p>
          Brush at least twice daily, floss once, and use mouthwash as directed.
          Consider brushing after meals when possible.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Understanding Children's Dental Development",
    excerpt:
      "A parent's guide to managing dental milestones and preventing common childhood dental issues.",
    category: "Pediatric Care",
    image: "/src/assets/images/blog/pediatric-care.jpg",
    slug: "common-dental-problems-children",
    readTime: 7,
    tags: ["Children", "Development", "Prevention"],
    content: (
      <>
        <h3>Guiding Your Child's Dental Journey</h3>
        <p>
          Understanding and supporting your child's dental development is key to
          ensuring a lifetime of healthy smiles.
        </p>

        <h4>1. Baby Teeth: The First Milestone</h4>
        <p>
          Baby teeth, also known as primary teeth, start to emerge around six
          months of age. These teeth are crucial for your child's eating,
          speaking, and smiling.
        </p>

        <h4>2. The Role of Fluoride</h4>
        <p>
          Fluoride is essential in preventing cavities and strengthening tooth
          enamel. Ensure your child uses a fluoride toothpaste and receives
          professional fluoride treatments as recommended.
        </p>

        <h4>3. Sealants for Cavity Prevention</h4>
        <p>
          Dental sealants are protective coatings applied to the chewing
          surfaces of back teeth. They act as a barrier against cavities.
        </p>

        <h4>4. Orthodontic Considerations</h4>
        <p>
          Early evaluation by an orthodontist can determine if your child will
          need braces or other corrective measures in the future.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Emergency Dental Care: Quick Response Guide",
    excerpt:
      "Learn how to handle dental emergencies effectively with our step-by-step emergency response guide.",
    category: "Emergency Care",
    image: "/src/assets/images/blog/emergency-care.jpg",
    slug: "emergency-dental-care-guide",
    readTime: 6,
    tags: ["Emergency", "First Aid", "Urgent Care"],
    content: (
      <>
        <h3>Be Prepared for Dental Emergencies</h3>
        <p>
          Knowing how to respond in a dental emergency can save a tooth and
          alleviate pain. Follow these guidelines for common dental emergencies.
        </p>

        <h4>1. Toothache Relief</h4>
        <p>
          Rinse your mouth with warm water and use dental floss to remove any
          lodged food. Avoid placing aspirin directly on the tooth or gums.
        </p>

        <h4>2. Knocked-Out Tooth</h4>
        <p>
          Handle the tooth by the crown (the part that is normally visible in
          the mouth), not the root. Rinse it gently in water if dirty, and try
          to reinsert it into the socket. If that's not possible, store the
          tooth in a container with milk or saline and seek immediate dental
          care.
        </p>

        <h4>3. Chipped or Fractured Tooth</h4>
        <p>
          Rinse your mouth with warm water and apply a cold compress to reduce
          swelling. See a dentist promptly for an evaluation and treatment.
        </p>

        <h4>4. Lost Filling or Crown</h4>
        <p>
          If you lose a filling or crown, try to reinsert it if possible. Use
          dental wax or sugarless gum to temporarily seal the tooth until you
          can see a dentist.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Modern Preventive Dentistry Techniques",
    excerpt:
      "Discover the latest advances in preventive dental care and how they can benefit your oral health.",
    category: "Preventive Care",
    image: "/src/assets/images/blog/preventive-care.jpg",
    slug: "modern-preventive-dentistry",
    readTime: 8,
    tags: ["Prevention", "Technology", "Wellness"],
    content: (
      <>
        <h3>Stay Ahead with Preventive Dentistry</h3>
        <p>
          Preventive dentistry focuses on maintaining oral health and preventing
          dental problems before they start. Explore these modern techniques.
        </p>

        <h4>1. Digital X-Rays</h4>
        <p>
          Digital X-rays use less radiation than traditional X-rays and provide
          instant, high-quality images of your teeth and jaws.
        </p>

        <h4>2. Intraoral Cameras</h4>
        <p>
          These small, pen-sized cameras allow your dentist to see detailed
          images of your teeth and gums, making diagnosis and treatment planning
          more accurate.
        </p>

        <h4>3. Laser Dentistry</h4>
        <p>
          Lasers can be used for a variety of dental procedures, including
          cavity detection, tooth preparation, and gum disease treatment, often
          with less discomfort and faster healing times.
        </p>

        <h4>4. Preventive Sealants and Fluoride Treatments</h4>
        <p>
          Sealants protect against cavities, while fluoride treatments
          strengthen tooth enamel and help reverse early signs of tooth decay.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Nutrition and Oral Health",
    excerpt:
      "Explore the crucial connection between your diet and dental health with evidence-based insights.",
    category: "Oral Hygiene",
    image: "/src/assets/images/blog/nutrition-dental.jpg",
    slug: "nutrition-oral-health",
    readTime: 6,
    tags: ["Nutrition", "Diet", "Health"],
    content: (
      <>
        <h3>The Mouth-Body Connection</h3>
        <p>
          What you eat and drink has a direct impact on your oral health. Learn
          how to nourish your smile with these dietary guidelines.
        </p>

        <h4>1. Limit Sugary Foods and Beverages</h4>
        <p>
          Sugar feeds the bacteria in your mouth that cause tooth decay. Limit
          sugary snacks and drinks, and opt for healthier alternatives.
        </p>

        <h4>2. Eat a Balanced Diet</h4>
        <p>
          A diet rich in fruits, vegetables, whole grains, and lean proteins
          provides the nutrients your body and teeth need for optimal health.
        </p>

        <h4>3. Stay Hydrated</h4>
        <p>
          Drinking plenty of water helps rinse away food particles and bacteria,
          and is essential for maintaining a healthy mouth.
        </p>

        <h4>4. Consider Dental Supplements</h4>
        <p>
          Consult your dentist about supplements like fluoride, calcium, and
          vitamin D, which can support your oral health.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Advanced Cosmetic Dentistry Options",
    excerpt:
      "Explore modern cosmetic dentistry procedures that can transform your smile.",
    category: "Preventive Care",
    image: "/src/assets/images/blog/cosmetic-dentistry.jpg",
    slug: "cosmetic-dentistry-guide",
    readTime: 7,
    tags: ["Cosmetic", "Veneers", "Whitening"],
    content: (
      <>
        <h3>Transform Your Smile</h3>
        <p>
          Modern cosmetic dentistry offers numerous options for improving your
          smile's appearance.
        </p>

        <h4>Popular Treatments</h4>
        <ul>
          <li>Professional teeth whitening</li>
          <li>Dental veneers</li>
          <li>Invisible aligners</li>
          <li>Dental bonding</li>
        </ul>

        <h4>Choosing the Right Procedure</h4>
        <p>
          Consider factors like cost, duration of treatment, and maintenance
          requirements when selecting a cosmetic procedure.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Understanding Gum Disease",
    excerpt:
      "Learn about the causes, prevention, and treatment of periodontal disease.",
    category: "Oral Hygiene",
    image: "/src/assets/images/blog/gum-disease.jpg",
    slug: "gum-disease-guide",
    readTime: 8,
    tags: ["Periodontal", "Prevention", "Treatment"],
    content: (
      <>
        <h3>Protecting Your Gums</h3>
        <p>
          Gum disease is a common but preventable condition that can affect your
          oral health.
        </p>

        <h4>Early Signs of Gum Disease</h4>
        <ul>
          <li>Bleeding gums during brushing</li>
          <li>Swollen or tender gums</li>
          <li>Persistent bad breath</li>
          <li>Receding gumline</li>
        </ul>

        <h4>Prevention and Treatment</h4>
        <p>
          Regular dental checkups and good oral hygiene are essential for
          preventing gum disease. Treatment options vary based on severity.
        </p>
      </>
    ),
  },
];

const categories = [
  "Oral Hygiene",
  "Pediatric Care",
  "Emergency Care",
  "Preventive Care",
];

export default function AdviceCare() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Enhanced filtering with tag support
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchLower));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div
        className={`${
          selectedArticle ? "blur-sm" : ""
        } transition-all duration-200`}
      >
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <motion.section
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-b from-primary/5 to-transparent py-24"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl font-heading">
                  Expert Dental Resources
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                  Discover evidence-based advice and practical tips for
                  maintaining optimal oral health
                </p>
              </div>
            </div>
          </motion.section>
          {/* Content Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Search and Filter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12 space-y-8"
              >
                <div className="max-w-md mx-auto">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles or topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-5 py-3 pl-12 text-base text-gray-900 placeholder-gray-500 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white shadow-sm"
                    />
                    <svg
                      className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
              </motion.div>

              {/* Blog Posts Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="min-h-[500px]"
              >
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {" "}
                    {filteredPosts.map((post) => (
                      <div
                        key={post.id}
                        onClick={() => setSelectedArticle(post)}
                      >
                        <Suspense
                          fallback={
                            <div className="bg-white rounded-lg shadow-sm p-4 animate-pulse h-[300px]">
                              <div className="h-48 bg-gray-100 rounded-md mb-4"></div>
                              <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                              <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                            </div>
                          }
                        >
                          <BlogCard
                            title={post.title}
                            excerpt={post.excerpt}
                            category={post.category}
                            image={post.image}
                            readTime={post.readTime}
                            tags={post.tags}
                            onClick={() => setSelectedArticle(post)}
                          />
                        </Suspense>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="mt-4 text-lg text-gray-900 font-medium">
                      No articles found
                    </h3>
                    <p className="mt-2 text-gray-500">
                      Try adjusting your search or filter to find what you're
                      looking for
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </section>
          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto mb-12"
              >
                <h2 className="text-3xl font-bold font-heading">
                  Common Dental Questions
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Find answers to frequently asked questions about dental care
                  and oral health
                </p>
              </motion.div>

              <div className="max-w-2xl mx-auto">
                <Suspense
                  fallback={
                    <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-lg p-4 animate-pulse"
                        >
                          <div className="h-4 bg-gray-100 rounded w-3/4 mb-4"></div>
                          <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                        </div>
                      ))}
                    </div>
                  }
                >
                  <FAQ />
                </Suspense>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleModal
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
