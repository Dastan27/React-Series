import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
    },
    {
      id: 2,
      name: "table glass",
      price: 250,
    },
    {
      id: 3,
      name: "table metal",
      price: 500,
    },
    {
      id: 4,
      name: "table plastic",
      price: 150,
    },
    {
      id: 5,
      name: "table fibre",
      price: 180,
    },
  ];

  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filteredProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
