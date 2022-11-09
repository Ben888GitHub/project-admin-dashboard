import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db('test');
	const products = db.collection('products');

	const { body, method, query } = req;

	if (method === 'GET') {
		const product = await products.findOne({ sku: query.sku });
		res.json({ status: 200, data: product });
	} else if (method === 'DELETE') {
		const deleteProduct = await products.deleteOne({
			sku: query.sku
		});
		res.json({ status: 200, data: deleteProduct });
	} else if (method === 'PUT') {
		console.log(body);
		console.log(query.sku);

		const { title, price, image } = body;

		const updateProduct = await products.updateOne(
			{ sku: query.sku },
			{
				$set: {
					title,
					price,
					image
				}
			}
		);
		console.log(updateProduct);
		res.json({ status: 200, data: updateProduct });
	}
}
