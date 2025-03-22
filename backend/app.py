from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from starlette.responses import JSONResponse
from PIL import Image
import io
import os
import torch
import torchvision.transforms as transforms
import traceback

# ✅ Ensure 'static' folder exists
STATIC_DIR = "static"
os.makedirs(STATIC_DIR, exist_ok=True)

# ✅ Load AI Model (Style Transfer) with Error Handling
try:
    print("Loading style transfer model...")  # Debugging message
    style_model = torch.hub.load('pytorch/examples:main', 'fast_neural_style', 'candy')
    style_model.eval()
    print("Model loaded successfully!")
except Exception as e:
    print("🚨 Error loading model:", e)
    style_model = None  # Prevents crashes if model fails to load

app = FastAPI()

# ✅ Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

# ✅ Serve static files
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

# ✅ Image processing function using Style Transfer
def apply_style_transfer(image):
    if style_model is None:
        raise RuntimeError("❌ Style transfer model not loaded. Please check the logs.")

    transform = transforms.Compose([
        transforms.Resize((256, 256)),  # Resize to standard size
        transforms.ToTensor(),
        transforms.Lambda(lambda x: x.mul(255))  # Scale pixel values correctly
    ])

    image_tensor = transform(image).unsqueeze(0)

    with torch.no_grad():
        styled_tensor = style_model(image_tensor).cpu().squeeze(0)

    # Convert tensor to image
    styled_image = styled_tensor.clamp(0, 255).permute(1, 2, 0).numpy().astype("uint8")

    return Image.fromarray(styled_image)

@app.post("/generate-decoration")
async def generate_decoration(file: UploadFile = File(...)):
    try:
        if not file:
            return JSONResponse(content={"error": "No image uploaded"}, status_code=400)

        image = Image.open(io.BytesIO(await file.read())).convert("RGB")

        # ✅ Apply AI-driven decoration
        decorated_image = apply_style_transfer(image)

        # ✅ Save processed image
        image_path = os.path.join(STATIC_DIR, "generated_image.png")
        decorated_image.save(image_path, format="PNG")

        return JSONResponse(content={
            "message": "✅ Decoration generated successfully!",
            "image_url": f"http://127.0.0.1:8000/static/generated_image.png"
        })

    except Exception as e:
        error_details = traceback.format_exc()
        print("🚨 Error:", error_details)  # Logs full traceback in the terminal
        return JSONResponse(content={"error": str(e), "traceback": error_details}, status_code=500)

# ✅ Run FastAPI server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
