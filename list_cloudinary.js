import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dly7v8v3o',
  api_key: '957713534688775',
  api_secret: 'gEHZGHFQnXD0F03a0sOIqsv2KNU'
});

async function listResources() {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'manto-store/',
      max_results: 500
    });
    console.log(JSON.stringify(result.resources.map(r => r.public_id), null, 2));
  } catch (error) {
    console.error('Error fetching resources:', error);
  }
}

listResources();
