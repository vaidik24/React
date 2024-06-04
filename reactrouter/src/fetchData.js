export const fetchData = async () => {
  const res = await fetch("https://api.github.com/users/vaidik24");
  return res.json();
};
