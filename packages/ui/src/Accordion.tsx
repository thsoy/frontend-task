import { useEffect, useRef, useState } from "react";
import {
  AccordionContainer,
  ArrowIcon,
  ButtonAccordion,
  ContentAccordion,
  ContentsContainer,
  TitleWrap,
} from "./Accordion.styled";
import { FlexBox } from "./FlexBox";
import { Icon } from "./Icon";
import { Typography } from "./Typography";

export function Accordion({
  title,
  contents,
}: {
  title: string;
  contents?: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");
  const [toggle, setToggle] = useState(false);
  const [initIsExpanded, setInitIsExpanded] = useState(toggle);
  const toggleState = () => {
    setInitIsExpanded(false);
    setToggle((prevToggle) => !prevToggle);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (toggle) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [toggle]);

  return (
    <FlexBox>
      <AccordionContainer onClick={toggleState}>
        <div style={{ position: "relative" }}>
          <ButtonAccordion aria-expanded={toggle}>
            <TitleWrap>
              <Typography text={title} fontWeight="700px" />
            </TitleWrap>
            <ArrowIcon>
              <Icon icon="ArrowDown" width={16} height={16} />
            </ArrowIcon>
          </ButtonAccordion>
          <ContentAccordion
            aria-expanded={toggle}
            ref={contentRef}
            height={height}
            initIsExpanded={initIsExpanded}
          >
            {toggle && <ContentsContainer>{contents}</ContentsContainer>}
          </ContentAccordion>
        </div>
      </AccordionContainer>
    </FlexBox>
  );
}
