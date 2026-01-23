import { useParams } from "react-router";

function ProductDetailPage() {
  const params = useParams<{ productSlug: string }>();
  return (
    <div className="font-bold">
      <h1>Product Detail Page</h1>
      <h2>{params.productSlug}</h2>
      <h2></h2>
    </div>
  );
}
export default ProductDetailPage;
