type Image = {
  url: string;
};

export const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  // console.log(images);
  return images[0];
};
