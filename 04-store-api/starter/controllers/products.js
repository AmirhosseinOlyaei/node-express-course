// const getAllProducts = async (req, res) => {
//   const { featured, company, name, sort, fields } = req.query;
// };
// module.exports = { getAllProducts };

// const getAllProductsStatic = async (req, res) => {
//     const products = await Product.find({ price: { $gt: 30 } })
//         .sort('price')
//         .select('name price');
//     res.status(200).json({ products, nbHits: products.length });
// }
// module.exports = { getAllProductsStatic };

const getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: "products testing route" });
};

const getAllProducts = (req, res) => {
  res.status(200).json({ msg: "products route" });
};

module.exports = { getAllProductsStatic, getAllProducts };
