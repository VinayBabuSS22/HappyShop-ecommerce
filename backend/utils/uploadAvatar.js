const cloudinary = require("cloudinary");

// Returns true when Cloudinary credentials look configured (not the placeholder
// values used for local development).
const hasCloudinaryCredentials = () => {
  const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
    process.env;
  return Boolean(
    CLOUDINARY_NAME &&
      CLOUDINARY_API_KEY &&
      CLOUDINARY_API_SECRET &&
      !/^0+$/.test(CLOUDINARY_API_KEY)
  );
};

// Uploads an avatar (data URL or remote URL) to Cloudinary. When Cloudinary is
// not configured or the upload fails, it falls back to storing the provided
// image string directly so signup still works locally without external setup.
const uploadAvatar = async (avatar) => {
  if (hasCloudinaryCredentials()) {
    try {
      const myCloud = await cloudinary.v2.uploader.upload(avatar, {
        folder: "avatars",
      });
      return {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    } catch (error) {
      console.error(
        "Cloudinary upload failed, storing avatar inline:",
        error.message
      );
    }
  }

  return {
    public_id: `local_${Date.now()}`,
    url: avatar,
  };
};

module.exports = uploadAvatar;
