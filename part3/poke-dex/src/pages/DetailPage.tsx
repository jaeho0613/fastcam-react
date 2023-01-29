import {useLocation, useParams} from "react-router-dom";
import {Tabs} from "../compoenets/Tabs";
import { useMemo, useState } from 'react';
import useSpecies from '../hooks/useSpecies';
import { PokemonInfo } from '../compoenets/PokemonInfo';
import { types } from 'util';
import usePokemon from '../hooks/usePokemon';
import { Color, PokemonResponse, Stat } from '../types';
import { About } from '../compoenets/About';
import { Stats } from '../compoenets/Stats';
import { Evolution } from '../compoenets/Evolution';

type Params = {
  id: string;
}

type Tab = 'about' | 'stats' | 'evolution';

export function DetailPage() {
  const {id} = useParams<Params>();
  const [selectedTab, setSelectedTab] = useState<Tab>('about');

  const pokemonResult = usePokemon<PokemonResponse>(id);

  const speciesResult = useSpecies(id);

  const {
    types,
    name,
    base_experience,
    height,
    weight,
    stats,
    abilities
  } = useMemo(() => ({
    name: pokemonResult.data?.data.name,
    types: pokemonResult.data?.data.types,
    height: pokemonResult.data?.data.height,
    weight: pokemonResult.data?.data.weight,
    abilities: pokemonResult.data?.data.abilities,
    base_experience: pokemonResult.data?.data.base_experience,
    stats: pokemonResult.data?.data.stats,
  }), [pokemonResult]);

  const {
    color,
    evolutionChainUrl,
    genderRate,
    growthRate,
    isLegendary,
    isMythical,
    flavorText,
  } = useMemo(() => ({
    color: speciesResult.data?.data.color,
    growthRate: speciesResult.data?.data.growth_rate.name,
    flavorText: speciesResult.data?.data.flavor_text_entries[0].flavor_text,
    genderRate: speciesResult.data?.data.gender_rate,
    isLegendary: speciesResult.data?.data.is_legendary,
    isMythical: speciesResult.data?.data.is_mythical,
    evolutionChainUrl: speciesResult.data?.data.evolution_chain.url,
  }), [speciesResult]);

  const handleClick = (tab: Tab) => {
    setSelectedTab(tab);
  }

  return (
    <div>
      <PokemonInfo id={id ?? '1'} name={name} types={types} color={color} />
      <Tabs tab={selectedTab} onClick={handleClick} color={{name: 'red', url: ''}}/>
      {
        selectedTab === 'about' && (
          <About
            isLoading={pokemonResult.isLoading || pokemonResult.isLoading}
            color={color}
            genderRate={genderRate}
            isLegendary={isLegendary}
            isMythical={isMythical}
            types={types}
            weight={weight}
            height={height}
            baseExp={base_experience}
            abilities={abilities}
          />
        )
      }
      {
        selectedTab === 'stats' && (
          <Stats
            isLoading={pokemonResult.isLoading || speciesResult.isLoading}
            stats={stats}
            color={color}
          />
        )
      }
      {
        selectedTab === 'evolution' && (
          <Evolution
            id={id}
            isLoading={speciesResult.isLoading}
            color={color}
            url={evolutionChainUrl}
          />
        )
      }
    </div>
  );
}