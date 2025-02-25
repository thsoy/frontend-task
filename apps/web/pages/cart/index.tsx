import { FlexBox } from "ui/FlexBox";
import { Typography } from "ui/Typography";
import { Badge } from "ui/Badge";
import { Checkbox } from "ui/Checkbox";
import { Bottom } from "ui/Bottom";
import { Button } from "ui/Button";
import { Header } from "ui/Header";
import { useRouter } from "next/router";
import { Icon } from "ui/Icon";
import { useEffect, useState } from "react";
import sumBy from "lodash-es/sumBy";

export default function Cart() {
  const DATA = {
    result: "SUCCESS",
    data: [
      {
        frontBrand: {
          brandNameEng: "Brand",
          brandNameKor: "클래식 런치박스",
          frontBrandNo: 13,
          heartCount: 59916,
        },
        itemName: "G CLASSIC COTTON TWILL PANTS (BLACK)",
        itemImage: {
          imageHeight: 1080,
          imageWidth: 1080,
          imageUrl:
            "https://img.29cm.co.kr/item/202409/11ef7adad6ee3806a27fc9f9ec823d19.png?width=300",
        },
        saleInfo: null,
        itemSize: "L",
        itemColor: "Teal",
        itemNo: 2790502,
        sellPrice: 75000,
        consumerPrice: 108000,
        deliveryInfo: 3500,
        heartCount: 59916,
        isSoldOut: false,
        extraOptions: false,
      },
      {
        frontBrand: {
          brandNameEng: "카키포인트",
          brandNameKor: "[선발매]_Damage Stud T-shirt (beige)",
          frontBrandNo: 1673323,
          heartCount: 59916,
        },
        itemName: "G CLASSIC COTTON TWILL PANTS (BLACK)",
        itemImage: {
          imageHeight: 1080,
          imageWidth: 1080,
          imageUrl:
            "https://img.29cm.co.kr/item/202502/11efe83de37242eb852143b169d01004.jpg?width=700",
        },
        saleInfo: null,
        itemSize: "L",
        itemColor: "Teal",
        itemNo: 2790502,
        sellPrice: 75000,
        consumerPrice: 108000,
        deliveryInfo: 3500,
        heartCount: 59916,
        isSoldOut: false,
        extraOptions: false,
      },
      {
        frontBrand: {
          brandNameEng: "그레이룸",
          brandNameKor: "[예약배송]_플리츠 반목 티셔츠",
          frontBrandNo: 16,
          heartCount: 59916,
        },
        itemName: "G CLASSIC COTTON TWILL PANTS (BLACK)",
        itemImage: {
          imageHeight: 1080,
          imageWidth: 1080,
          imageUrl:
            "https://img.29cm.co.kr/item/202502/11efe36782ed22008f0ad1ffa2259c4c.jpg?width=700",
        },
        saleInfo: "20%",
        itemSize: "L",
        itemColor: "Teal",
        itemNo: 2790502,
        sellPrice: 75000,
        consumerPrice: 108000,
        deliveryInfo: 0,
        heartCount: 59916,
        isSoldOut: false,
        extraOptions: true,
      },
    ],
    message: null,
    errorCode: null,
  };

  const [cartList, setCartList] = useState(DATA.data);
  const [checkAll, setCheckAll] = useState(false);
  const [checkedId, setCheckedId] = useState<string[]>([]);
  const router = useRouter();
  const handleRemove = (id: string) => {
    setCartList((cartList) =>
      cartList.filter((d) => String(d.frontBrand.frontBrandNo) !== id)
    );
    setCheckedId((checkedId) => checkedId.filter((checked) => checked !== id));
  };

  const handleRemoveSelected = () => {
    if (checkAll) {
      setCartList([]);
      setCheckedId([]);
    } else {
      setCartList(
        cartList.filter(
          (cart) => !checkedId.includes(String(cart.frontBrand.frontBrandNo))
        )
      );
      setCheckedId(checkedId.filter((checked) => !checkedId.includes(checked)));
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedId([]);
    setCheckAll(e.currentTarget.checked);
  };

  const handleCheckedQueue = (checked: boolean, id: string) => {
    let list: string[] = [];
    if (checked && !checkedId.find((checked) => checked === id)) {
      list.push(...checkedId);
      list.push(id);
    } else {
      list = checkedId.filter((checked) => checked !== id);
    }
    setCheckedId(list);
  };

  return (
    <FlexBox direction="column">
      <Header title="장바구니" icon="ArrowLeft" handleBack={router.back} />
      <FlexBox gap="12px" direction="row">
        <FlexBox gap="12px" direction="row" justifyContent="flex-start">
          <Checkbox
            checked={checkAll}
            id="checkAll"
            handleChange={handleSelectAll}
          />
          <Typography
            text={`전체선택 (${checkAll ? cartList.length : checkedId.length}/${cartList.length})`}
          />
        </FlexBox>
        <FlexBox gap="12px" direction="row" justifyContent="flex-end">
          <Button
            width="fit-content"
            buttonText="선택삭제"
            color="#000"
            fontSize="11px"
            background="#F4F4F4"
            onClick={handleRemoveSelected}
          />
        </FlexBox>
      </FlexBox>
      <FlexBox gap="12px" direction="column" padding="0 0 70px 0">
        {cartList.map(
          ({
            frontBrand,
            itemImage,
            itemSize,
            itemColor,
            saleInfo,
            sellPrice,
            extraOptions,
            deliveryInfo,
          }) => (
            <Item
              key={itemImage.imageUrl}
              imageUrl={itemImage.imageUrl}
              extraOptions={extraOptions}
              price={sellPrice}
              deliveryInfo={deliveryInfo}
              itemColor={itemColor}
              itemSize={itemSize}
              saleInfo={saleInfo}
              productName={`${frontBrand.brandNameEng} ${frontBrand.brandNameKor} `}
              id={String(frontBrand.frontBrandNo)}
              handleRemove={handleRemove}
              checkAll={checkAll}
              handleCheckedQueue={handleCheckedQueue}
            />
          )
        )}
      </FlexBox>
      <Bottom background="#fff">
        <FlexBox>
          <FlexBox justifyContent="flex-start" alignItems="center" gap="4px">
            <Typography
              text="총"
              fontSize="16px"
              lineHeight="140%"
              fontWeight="700"
            />
            <Typography
              text={`${sumBy(cartList, "sellPrice")}원`}
              fontSize="16px"
              lineHeight="140%"
              fontWeight="700"
            />
            <Icon icon="ArrowDown" width={16} height={16} />
          </FlexBox>
          <Button buttonText="결제하기" />
        </FlexBox>
      </Bottom>
    </FlexBox>
  );
}

interface IItem {
  imageUrl: string;
  price: number;
  extraOptions: boolean;
  deliveryInfo: number;
  itemColor: string;
  itemSize: string;
  saleInfo: string | null;
  productName: string;
  id: string;
  handleRemove: (id: string) => void;
  checkAll: boolean;
  handleCheckedQueue: (checked: boolean, id: string) => void;
}
function Item({
  imageUrl,
  price,
  extraOptions,
  deliveryInfo,
  itemColor,
  itemSize,
  saleInfo,
  productName,
  id,
  handleRemove,
  checkAll,
  handleCheckedQueue,
}: IItem) {
  const [isChecked, setChecked] = useState(checkAll);

  useEffect(() => {
    setChecked(checkAll);
  }, [checkAll]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
    handleCheckedQueue(e.currentTarget.checked, e.currentTarget.id);
  };

  return (
    <FlexBox direction="column" width="auto" padding="10px">
      <FlexBox alignItems="center">
        <FlexBox
          direction="row"
          justifyContent="flex-start"
          gap="8px"
          padding="10px 0"
        >
          <Checkbox checked={isChecked} id={id} handleChange={handleChange} />
          <Typography text={productName} />
        </FlexBox>
        <FlexBox justifyContent="flex-end" width="fit-contennt">
          <button onClick={() => handleRemove(id)}>
            <Icon icon="Close" />
          </button>
        </FlexBox>
      </FlexBox>
      <FlexBox direction="row" gap="12px">
        <img src={imageUrl} alt="" width={72} height={72} />
        <FlexBox direction="column">
          <Typography
            fontSize="11px"
            fontWeight="500"
            lineHeight="136%"
            text={price}
          />
          <FlexBox justifyContent="start" gap="3px">
            <Typography
              fontSize="10px"
              lineHeight="120%"
              text="할인적용"
              color="#474747"
            />
            <Typography
              fontSize="10px"
              lineHeight="120%"
              color="#474747"
              text={saleInfo ?? "없음"}
            />
          </FlexBox>
          <FlexBox justifyContent="start" gap="3px">
            <Typography
              fontSize="10px"
              lineHeight="120%"
              text="배송비"
              color="#474747"
            />
            <Typography
              fontSize="10px"
              lineHeight="120%"
              color="#474747"
              text={0 === deliveryInfo ? "무료배송" : deliveryInfo}
            />
          </FlexBox>
          <FlexBox justifyContent="start" gap="3px">
            <Badge
              height="15px"
              borderRadius="2px"
              padding="2px 6px 0px 6px"
              text={
                <Typography
                  color="#fff"
                  fontSize="10px"
                  lineHeight="120%"
                  text={itemSize}
                />
              }
            />
            <Badge
              height="15px"
              borderRadius="2px"
              padding="2px 6px 0px 6px"
              text={
                <Typography
                  color="#fff"
                  fontSize="10px"
                  lineHeight="120%"
                  text={itemColor}
                />
              }
            />
            {extraOptions && (
              <Badge
                height="15px"
                borderRadius="2px"
                padding="2px 6px 0px 6px"
                text={
                  <Typography
                    color="#fff"
                    fontSize="10px"
                    lineHeight="120%"
                    text="선물포장"
                  />
                }
              />
            )}
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox alignItems="center" justifyContent="space-between">
        <Typography
          fontSize="14px"
          fontWeight="700"
          lineHeight="140%"
          text={`${price}원`}
        />
        <Button
          buttonText="쿠폰적용"
          borderColor="#E4E4E4"
          background="#fff"
          color="#000"
          width="fit-content"
          fontSize="11px"
          padding="4px 10px"
        />
      </FlexBox>
    </FlexBox>
  );
}
