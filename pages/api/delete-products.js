import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db('test');
	const products = db.collection('products');
	const { body } = req;

	const deleteProducts = await products.deleteMany({
		sku: {
			$in: body
		}
	});
	res.json({ status: 200, data: deleteProducts });
}
