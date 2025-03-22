import { useState } from "react";
import axios from "axios";

const CakeDecoration = () => {
    const [image, setImage] = useState(null);
    const [generatedImage, setGeneratedImage] = useState("");

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const uploadImage = async () => {
        if (!image) return alert("Please upload an image first!");

        const formData = new FormData();
        formData.append("image", image);

        try {
            const response = await axios.post("http://127.0.0.1:5000/generate-decoration", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.data.image_url) {
                setGeneratedImage(response.data.image_url);
            }
        } catch (error) {
            console.error("Error generating cake decoration:", error);
        }
    };

    return (
        <div>
            <h2>AI-Powered Cake Decoration</h2>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={uploadImage}>Generate Decoration</button>

            {generatedImage && (
                <div>
                    <h3>Decorated Cake:</h3>
                    <img src={generatedImage} alt="Generated Cake Decoration" />
                </div>
            )}
        </div>
    );
};

export default CakeDecoration;
