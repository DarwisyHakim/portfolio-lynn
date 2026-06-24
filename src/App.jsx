import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const heroImages = [
  "public/works/dragon bg 3.jpg",
  "/works/dragon bg1.jpg",
  "/works/night.jpg",
  "/works/spacepop.png",
  "/works/space_ship.jpg",
];

const visualDevelopment = [
  {
    title: "Forest Dragon",
    category: "Visual Development",
    image: "/works/dragon bg 3.jpg",
  },
  {
    title: "Dragon Branch",
    category: "Environment Concept",
    image: "/works/dragon bg1.jpg",
  },
  {
    title: "Cliff House",
    category: "Environment Design",
    image: "/works/night.jpg",
  },
  {
    title: "Space Pop",
    category: "Space Concept",
    image: "/works/spacepop.png",
  },
  {
    title: "Space Ship",
    category: "Vehicle Concept",
    image: "/works/space_ship.jpg",
  },
];

const characterDesign = [
  {
    title: "Mushroom Character",
    category: "Character Exploration",
    image: "/works/+=¦d¦-º@.jpg",
  },
  {
    title: "Character Lineup",
    category: "Production Sketches",
    image: "/works/Aug-31st.jpg",
  },
  {
    title: "Bunny Character",
    category: "Character Design",
    image: "/works/bunny_20141110.jpg",
  },
  {
    title: "Wukong",
    category: "Character Design",
    image: "/works/small-wukong.jpg",
  },
  {
    title: "Tiger Pose",
    category: "Character Poses",
    image: "/works/tiger_pose_20141028.jpg",
  },
];

const expressionSheets = [
  {
    title: "Boy Expressions",
    category: "Expression Sheet",
    image: "/works/cathayIIexpressions_boy (2).jpg",
  },
  {
    title: "Girl Expressions",
    category: "Expression Sheet",
    image: "/works/cathayIIexpressions_girl edit.jpg",
  },
  {
    title: "Rabbit Expressions",
    category: "Expression Sheet",
    image: "/works/rabbit_expression_20141029.jpg",
  },
  {
    title: "Dog Poses",
    category: "Pose Exploration",
    image: "/works/dog_expressions_poses_20141027.jpg",
  },
];

const creatureDesign = [
  {
    title: "Dragon Head Study",
    category: "Creature Design",
    image: "/works/dragon head study.jpg",
  },
  {
    title: "Dragon Sketches",
    category: "Creature Exploration",
    image: "/works/dragon sketch 12.jpg",
  },
  {
    title: "Dragon Forms",
    category: "Creature Exploration",
    image: "/works/dragon sketch 3.jpg",
  },
  {
    title: "Dragon Line Study",
    category: "Creature Sketches",
    image: "/works/dragon sketches 1.jpg",
  },
  {
    title: "Fish Creatures",
    category: "Creature Design",
    image: "/works/fish3.jpg",
  },
  {
    title: "Octopus Designs",
    category: "Creature Design",
    image: "/works/octupus-2.jpg",
  },
];

function ArtCard({ item, index }) {
  return (
    <motion.article
      className="art-card"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      viewport={{ once: true }}
    >
      <img src={item.image} alt={item.title} />
      <div className="art-overlay">
        <span>{item.category}</span>
        <h3>{item.title}</h3>
      </div>
    </motion.article>
  );
}

function GallerySection({ id, eyebrow, title, items, large = false }) {
  return (
    <section id={id} className="section">
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>

      <div className={large ? "gallery large-gallery" : "gallery"}>
        {items.map((item, index) => (
          <ArtCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="site">
      <header className="hero">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`hero-slide ${currentImage === index ? "active" : ""}`}
            style={{ backgroundImage: `url("${image}")` }}
          />
        ))}

        <div className="hero-overlay" />

        <nav className="navbar">
          <a href="#" className="logo">
            Lynette Leacu
          </a>

          <div className="nav-links">
            <a href="#visual-development">Work</a>
            <a href="#creature-design">Creatures</a>
            <a href="#production">Film</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
        >
          <p className="eyebrow">Visual Development Artist</p>
          <h1>Worlds, characters, creatures, and cinematic design.</h1>
          <p>
            Lynette Leacu is a Taiwan-based artist and designer with over twelve
            years of experience across animation, film, character design,
            creature development, environment art, and production work.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#visual-development">
              View Portfolio
            </a>
            <a className="btn secondary" href="#contact">
              Contact
            </a>
          </div>

          <div className="hero-dots">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={currentImage === index ? "active" : ""}
                onClick={() => setCurrentImage(index)}
                aria-label={`Show hero image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </header>

      <main>
        <GallerySection
          id="visual-development"
          eyebrow="Selected Work"
          title="Visual development and cinematic environment design."
          items={visualDevelopment}
          large
        />

        <GallerySection
          id="character-design"
          eyebrow="Character Design"
          title="Shape language, personality, poses, and production exploration."
          items={characterDesign}
        />

        <GallerySection
          id="expression-sheets"
          eyebrow="Expression Sheets"
          title="Emotion, acting, and character performance studies."
          items={expressionSheets}
        />

        <GallerySection
          id="creature-design"
          eyebrow="Creature Design"
          title="Dragons, animals, monsters, and playful creature exploration."
          items={creatureDesign}
        />

        <section id="production" className="section production">
          <div className="section-heading">
            <p className="eyebrow">Film & Production</p>
            <h2>
              Experience across short films, horror, props, and production
              design.
            </h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span>01</span>
              <h3>Gu</h3>
              <p>Award-winning short film contribution.</p>
            </div>

            <div className="timeline-item">
              <span>02</span>
              <h3>The Tag-a-Long</h3>
              <p>Work connected to Taiwan’s locally popular horror film scene.</p>
            </div>

            <div className="timeline-item">
              <span>03</span>
              <h3>Shadow</h3>
              <p>Prop design contribution.</p>
            </div>

            <div className="timeline-item">
              <span>04</span>
              <h3>The House That Never Dies</h3>
              <p>Prop design contribution.</p>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow">About</p>
            <h2>
              Born in Boston, raised in Taiwan, creating for film and animation.
            </h2>
            <p>
              Born in Boston, Massachusetts, Lynette Leacu was raised in and
              currently resides on the small island of Taiwan. For the past
              twelve years, she has been involved in award-winning short films,
              including <em> Gu</em>.
            </p>
            <p>
              Her work spans romantic historical films, locally popular horror
              stories such as <em>The Tag-a-Long</em>, and prop design for films
              including <em>Shadow</em> and <em>The House That Never Dies</em>.
              When she is not between projects or commission works, she can
              often be found making candles or soap for family and friends.
            </p>
          </motion.div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">Contact</p>
          <h2>
            Available for visual development, character design, creature design,
            and film work.
          </h2>
          <a className="btn primary" href="mailto:artist@email.com">
            Contact Lynette
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Lynette Leacu. Portfolio website.</p>
      </footer>
    </div>
  );
}

export default App;