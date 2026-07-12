const modules = import.meta.glob("./assets/photos/*.jpg", {
  eager: true,
  import: "default",
});

const photos = {};
for (const path in modules) {
  const name = path.split("/").pop();
  photos[name] = modules[path];
}

export default photos;
