const dev = process.env.NODE_ENV === 'development';

module.exports = {
  // Replace '/nextjs-typescript-tailwindcss' by your repository name
  basePath: dev ? '' : '/nextjs-typescript-tailwindcss',
};
