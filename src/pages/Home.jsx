import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "./Home.css"
export default function Home(){
    return (
        <>
            <Navbar></Navbar>
                <main className="home-page">

        {/* Hero Section */}

        <section className="hero-section">

          <h1>
            Create AI Images & Videos Instantly
          </h1>

          <p>
            Generate stunning AI content using
            powerful generative models.
          </p>

          <div className="hero-buttons">

            <button>
              Get Started
            </button>

            <button className="secondary-btn">
              Explore Features
            </button>

          </div>

        </section>

        {/* Features Section */}

        <section className="features-section">

          <div className="feature-card">
            <h2>AI Image Generation</h2>

            <p>
              Generate beautiful AI images
              from text prompts.
            </p>
          </div>

          <div className="feature-card">
            <h2>AI Video Generation</h2>

            <p>
              Create cinematic AI videos
              using prompts and images.
            </p>
          </div>

          <div className="feature-card">
            <h2>Fast Processing</h2>

            <p>
              Optimized AI pipelines for
              quick generation.
            </p>
          </div>

          <div className="feature-card">
            <h2>Download Results</h2>

            <p>
              Download generated images
              and videos instantly.
            </p>
          </div>

        </section>

    
            </main>
            <Footer></Footer>
        </>
    )
}