import { useState } from "react";
import axios from "axios";

const CakeDecor = () => {
    const [image, setImage] = useState(null);
    const [generatedImage, setGeneratedImage] = useState("");
    const [loading, setLoading] = useState(false); // ✅ Loading state

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const uploadImage = async () => {
        if (!image) return alert("❌ Please upload an image first!");

        const formData = new FormData();
        formData.append("file", image); // ✅ Ensure key name matches backend

        try {
            setLoading(true); // ✅ Show loading indicator
            console.log("Uploading image...");
            const response = await axios.post("http://127.0.0.1:8000/generate-decoration", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("✅ Response received:", response.data);

            if (response.data.image_url) {
                setGeneratedImage(response.data.image_url);
            }
        } catch (error) {
            console.error("🚨 Error generating cake decoration:", error);
            alert("❌ Failed to connect to the server. Please check the backend.");
        } finally {
            setLoading(false); // ✅ Hide loading indicator
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>🎂 AI-Powered Cake Decoration</h2>
            
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button 
                onClick={uploadImage} 
                style={{ marginLeft: "10px", padding: "5px 10px", cursor: "pointer" }}
                disabled={loading} // ✅ Disable button when loading
            >
                {loading ? "Processing..." : "Generate Decoration"}
            </button>

            {generatedImage && (
                <div>
                    <h3>🎨 Decorated Cake:</h3>
                    <img 
                        src={generatedImage} 
                        alt="Generated Cake Decoration" 
                        style={{ width: "300px", height: "auto", marginTop: "10px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                    />
                </div>
            )}
        </div>
    );
};

export default CakeDecor;
