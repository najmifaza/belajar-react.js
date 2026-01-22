import { useParams } from "react-router";

function ProductDetailPage() {
  const params = useParams<{ productSlug: string }>();
  return (
    <div>
      <h1>Product Detail Page</h1>
      <h3>{params.productSlug}</h3>
    </div>
  );
}
export default ProductDetailPage;
