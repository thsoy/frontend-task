import dynamic from "next/dynamic";

const MyCart = dynamic(() => import("../components/MyCart"), {
  ssr: false, // 클라이언트 사이드에서만 렌더링
});
export default function Page() {
  return (
    <div>
      <MyCart />
    </div>
  );
}
