import { Accordion } from "ui/Accordion";
import { Button } from "ui/Button";
import { FlexBox } from "ui/FlexBox";
import { Header } from "ui/Header";
import { Icon } from "ui/Icon";
import { Typography } from "ui/Typography";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DATA = {
  result: "SUCCESS",
  data: {
    frontBrand: {
      brandNameEng: "Brand",
      brandNameKor: "클래식 런치박스",
      frontBrandNo: 16723,
      heartCount: 59916,
    },
    itemName: "G CLASSIC COTTON TWILL PANTS (BLACK)",
    itemImage: {
      imageHeight: 1080,
      imageWidth: 1080,
      imageUrl:
        "https://img.29cm.co.kr/item/202409/11ef7adad6ee3806a27fc9f9ec823d19.png?width=300",
    },
    itemSize: [
      { size: "L", text: "L - 대형" },
      { size: "M", text: "M - 중형" },
      { size: "S", text: "S - 소형" },
    ],
    itemColor: ["Teal", "Black", "White"],
    extraOption: ["선물포장"],
    itemNo: 2790502,
    sellPrice: 75000,
    consumerPrice: 108000,
    deliveryInfo: "해당 브랜드 제품은 무료배송 됩니다.",
    heartCount: 59916,
    isSoldOut: false,
  },
  message: null,
  errorCode: null,
};
export default function Detail() {
  const { data } = DATA;
  const [size, setSize] = useState("");
  const [sizeAccordionText, setSizeAccordionText] = useState("");
  const handleSize = (size: string, text: string) => {
    setSize(size);
    setSizeAccordionText(text);
  };

  const [color, setColor] = useState("");
  const handleColor = (color: string) => setColor(color);

  const [extraOption, setExtraOption] = useState("선택없음");
  const handleExtraOption = (options: string) => setExtraOption(options);

  const handleAddCart = () => {
    console.log("api호출");
  };

  const router = useRouter();
  return (
    <FlexBox direction="column">
      <Header icon="ArrowLeft" title="상품상세" handleBack={router.back} />
      <img src={data.itemImage.imageUrl} />
      <FlexBox direction="column" gap="10px" padding="10px" width="auto">
        <FlexBox
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography
            text={data.frontBrand.brandNameEng}
            fontSize="14px"
            fontWeight="500"
            lineHeight="140%"
          />
          <Icon icon="ArrowRight" width={14} height={14} />
        </FlexBox>
        <Typography
          text={data.frontBrand.brandNameKor}
          fontSize="16px"
          fontWeight="500"
          lineHeight="140%"
        />
        <Typography
          text={data.sellPrice}
          fontSize="16px"
          fontWeight="500"
          lineHeight="140%"
        />
        <FlexBox justifyContent="start" gap="3px">
          <Typography
            text="사이즈"
            fontSize="14px"
            fontWeight="500"
            lineHeight="140%"
          />
          <Typography
            color="#FF4800"
            text="*"
            fontSize="14px"
            fontWeight="500"
            lineHeight="160%"
          />
        </FlexBox>
        <Accordion
          title={"" === sizeAccordionText ? "선택" : sizeAccordionText}
          contents={data.itemSize.map((item) => (
            <AccordionContents
              key={item.text}
              text={item.text}
              onClick={() => handleSize(item.size, item.text)}
            />
          ))}
        />
        <FlexBox justifyContent="start" gap="3px">
          <Typography
            text="색상"
            fontSize="14px"
            fontWeight="500"
            lineHeight="140%"
          />
          <Typography
            color="#FF4800"
            text="*"
            fontSize="14px"
            fontWeight="500"
            lineHeight="160%"
          />
        </FlexBox>
        <Accordion
          title={"" === color ? "색상" : color}
          contents={data.itemColor.map((item) => (
            <AccordionContents
              key={item}
              text={item}
              onClick={() => handleColor(item)}
            />
          ))}
        />
        <FlexBox>
          <Typography
            text="추가옵션"
            fontSize="14px"
            fontWeight="500"
            lineHeight="140%"
          />
        </FlexBox>
        <Accordion
          title={extraOption ?? "추가옵션"}
          contents={data.extraOption.map((item) => (
            <AccordionContents
              key={item}
              text={item}
              onClick={() => handleExtraOption(item)}
            />
          ))}
        />
      </FlexBox>
      <FlexBox padding="10px" width="auto">
        <Button
          borderRadius="10px"
          onClick={handleAddCart}
          buttonText="장바구니 담기"
          disabled={"" === size || "" === color}
        />
      </FlexBox>
    </FlexBox>
  );
}

const AccordionContents = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick}>
      <Typography text={text} lineHeight="30px" />
    </div>
  );
};
