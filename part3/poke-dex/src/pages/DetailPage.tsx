import {useLocation, useParams} from "react-router-dom";
import {Tabs} from "../compoenets/Tabs";
import {useState} from "react";

type Params = {
  id: string;
}

type Tab = 'about' | 'stats' | 'evolution';

export function DetailPage() {
  const {id} = useParams<Params>();
  const [selectedTab, setSelectedTab] = useState<Tab>('about');

  const handleClick = (tab: Tab) => {
    setSelectedTab(tab);
  }

  return (
    <div>
      <Tabs tab={selectedTab} onClick={handleClick} color={{name: 'red', url: ''}}/>
    </div>
  );
}