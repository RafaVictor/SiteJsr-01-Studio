import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function listResources() {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      max_results: 100
    });
    console.log(JSON.stringify(result.resources.map(r => r.public_id), null, 2));
  } catch (error) {
    console.error('Error fetching resources:', error);
  }
}

listResources();
