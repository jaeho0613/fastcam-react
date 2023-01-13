import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { throttle } from "throttle-debounce";
import styled from "@emotion/styled/macro";

const ListItem = styled.li`
  font-size: 36px;
`;

const List = styled.ul`
  overflow-x: hidden;
  overflow-y: scroll;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 512px;

  ${ListItem} + ${ListItem} {
    margin-top: 12px;
  }
`;

interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

interface Passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Airline;
  __v: number;
}

function App() {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const pageRef = useRef<number>(0);

  const [items, setItems] = useState<Array<Passenger>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);

  const onClick = async () => {
    for (let i = 0; i < 500; i++) {
      const response = await axios.post(
        "https://api.instantwebtools.net/v1/passenger",
        {
          name: "jaeho",
          trips: 250,
          airline: 1,
        }
      );
    }
  };

  const handleScroll = throttle(1000, () => {
    if (scrollRef.current) {
      const { scrollHeight, offsetHeight, scrollTop } = scrollRef.current;

      const offset = 50;

      setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset);
    }
  });

  const fetch = async (init?: boolean) => {
    const params = { size: 30, page: pageRef.current };

    try {
      const res = await axios.get(
        "https://api.instantwebtools.net/v1/passenger",
        { params }
      );

      setItems(init ? res.data.data : items.concat(res.data.data));
      setIsLast(res.data.totalPages === pageRef.current);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isScrollBottom) {
      pageRef.current = pageRef.current + 1;

      !isLast && fetch();
    }
  }, [isScrollBottom, isLast]);

  useEffect(() => {
    fetch(true);
  }, []);

  return (
    <div>
      <button onClick={onClick}>추가</button>
      <List ref={scrollRef} onScroll={handleScroll}>
        {items.map((item) => (
          <ListItem key={item._id}>{item.name}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
