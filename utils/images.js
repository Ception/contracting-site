// Dynamically load images from a directory
const importAll = (r) => {
  return r.keys().map((file) => ({
    name: file.replace("./", "").replace(".jpeg", ""), // Assumes the name of the image is the name of the file
    image: `/images/${r(file).slice(2)}`, // This is to remove the initial `./` from the path
  }));
};

const landscapingImages = importAll(
  require.context("../public/landscaping", false, /\.jpeg$/)
);
const interiorImages = importAll(
  require.context("../public/interior", false, /\.jpeg$/)
);
const exteriorImages = importAll(
  require.context("../public/exterior", false, /\.jpeg$/)
);

const transformImages = (arr) => {
  return arr.reduce((acc, curr, index) => {
    acc[index + 1] = curr; // Using index + 1 to start from 1
    return acc;
  }, {});
};

const images = {
  landscaping: transformImages(landscapingImages),
  interior: transformImages(interiorImages),
  exterior: transformImages(exteriorImages),
};

export default images;
