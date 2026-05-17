import { useState } from "react";
import axios from "axios";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "./Genrate.css";

export default function Image() {
  const apiUrl = import.meta.env.VITE_API_URL

  const [mode, setMode] = useState("image");

  const [prompt, setPrompt] = useState("");

  const [generatedImage, setGeneratedImage] = useState("");

  const [loading, setLoading] = useState(false);
  const handleDownload = () => {
      const link = document.createElement("a");
      link.href = generatedImage;
      link.download = "";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  const handleGenerate = async () => {

    try {

      setLoading(true);

      const response = await axios.post(
        `${apiUrl}/generate-image`,
        {
          prompt
        }
      );

      console.log(response.data);

      setGeneratedImage(response.data.image);

    } catch (err) {

      console.log(err);

      alert("Image generation failed");

    } finally {

      setLoading(false);

    }

  };

  return (
    <>

      <Navbar />

      <main className="generate-page">

        <div className="generate-container">

          <h2>Generate AI Content</h2>

          {/* MODE BUTTONS */}

          <div className="mode-buttons">

            <button
              className={
                mode === "image"
                  ? "active-mode"
                  : ""
              }
              onClick={() => setMode("image")}
            >
              Generate Image
            </button>

            <button
              className={
                mode === "video"
                  ? "active-mode"
                  : ""
              }
              onClick={() => setMode("video")}
            >
              Generate Video
            </button>

          </div>

          {/* PROMPT */}

          <textarea
            value={prompt}
            onChange={(e) =>
              setPrompt(e.target.value)
            }
            placeholder={
              mode === "image"
                ? "Describe the image you want..."
                : "Describe the video you want..."
            }
          />

          {/* FILE INPUT */}

          <input
            type="file"
            className="file-input"
          />

          {/* GENERATE BUTTON */}

          <button
            className="generate-btn"
            onClick={handleGenerate}
          >
            {
              loading
                ? "Generating..."
                : "Generate"
            }
          </button>

          {/* PREVIEW */}

          <div className="preview-box">

            {generatedImage ? (
              <>
                <img
                  src={generatedImage}
                  alt="Generated"
                  className="generated-image"
                />
                
                <button
                  onClick={handleDownload}
                  className="download-btn"
                >
                  Download
                </button>
              </>
            ) : (
              <p>
                Generated {mode} preview will appear here
              </p>
            )}

          </div>
            
        </div>

      </main>

      <Footer />

    </>
  );
}