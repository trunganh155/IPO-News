module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["api.fostech.vn"],
    },
    env: {
      // Biến môi trường
      API_URL: "https://api.fostech.vn/api/60939744ac969b4078488026",
      ACCESS_TOKEN: "f2ff5f0947d68f32d344142f38a2094b",
    },
  };
  return nextConfig;
};
