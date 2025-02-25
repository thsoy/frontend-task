import dynamic from "next/dynamic";

const ProductDetail = dynamic(() => import("../../components/ProductDetail"), {
  ssr: false, // 클라이언트 사이드에서만 렌더링
});
export default function Page() {
  return (
    <div>
      <ProductDetail />
    </div>
  );
}
