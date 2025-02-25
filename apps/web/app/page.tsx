"use client";
import { useRouter } from "next/navigation";
import { Bottom } from "ui/Bottom";
import { Button } from "ui/Button";
import { FlexBox } from "ui/FlexBox";
import { Header } from "ui/Header";
import { Typography } from "ui/Typography";

export default function Home() {
  const router = useRouter();
  const handleMoveProductDetail = () => router.push("/product/detail");
  const handleMoveMyCart = () => router.push("/cart");

  return (
    <div>
      <Header title="과제제출" />
      <FlexBox direction="column" gap="10px">
        <Button
          buttonText="Task1. 상품 상세 페이지"
          background="#fff"
          color="#000"
          fontWeight="700"
          fontSize="16px"
          borderColor="#cdcdcd"
          borderRadius="4px"
          onClick={handleMoveProductDetail}
        />
        <Button
          buttonText="Task2. 장바구니 페이지"
          background="#fff"
          color="#000"
          fontWeight="700"
          fontSize="16px"
          borderColor="#cdcdcd"
          borderRadius="4px"
          onClick={handleMoveMyCart}
        />
      </FlexBox>
      <Bottom>
        <FlexBox direction="column" alignItems="center" justifyContent="center">
          <Typography fontSize="14px" text="안녕하세요!" />
          <Typography fontSize="14px" text="부족하지만 확인부탁드립니다!" />
        </FlexBox>
      </Bottom>
    </div>
  );
}
