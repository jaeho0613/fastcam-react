import React, { useEffect, useState } from "react";
import Skeleton from "./component/Skeleton";
import styled from "@emotion/styled/macro";

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;

const Placeholder = () => {
  return (
    <Container>
      <ImageWrapper>
        <Skeleton
          width={320}
          height={220}
          animation={true}
          unit={"px"}
          color={"#f4f4f4"}
        />
      </ImageWrapper>
      <Info>
        <Skeleton
          width={150}
          height={29}
          rounded
          animation={true}
          unit={"px"}
          color={"#f4f4f4"}
        />
        <div style={{ height: "8px" }} />
        <Skeleton
          width={200}
          height={19}
          rounded
          animation={true}
          unit={"px"}
          color={"#f4f4f4"}
        />
      </Info>
    </Container>
  );
};

const Item = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="data:image/jpeg;base64,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" />
      </ImageWrapper>
      <Info>
        <Title>Cat taking a</Title>
        <Description>zzzzzzzzzzzzzzzzzzzzz</Description>
      </Info>
    </Container>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Base>
      {loading
        ? Array.from({ length: 25 }).map((_, idx) => <Placeholder key={idx} />)
        : Array.from({ length: 25 }).map((_, idx) => <Item key={idx} />)}
    </Base>
  );
}

export default App;
