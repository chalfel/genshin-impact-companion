import React, { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import Header from '../components/Header'
import {
  CharacterContainer,
  CommandBar,
  CommandBarItem,
  CommandBarOptions,
  CommandBarText,
  Container
} from '../styles/pages/TeamGenerator'
import { FiTrash, FiSave, FiShare2, FiArrowRightCircle } from 'react-icons/fi'
import { ICharacter } from '../interfaces/characters'

const TeamGenerator: React.FC = () => {
  const characters: ICharacter[] = [
    {
      id: 0,
      name: 'Diluc',
      element: 'pyro',
      imgUrl:
        'https://uploadstatic-sea.mihoyo.com/contentweb/20200609/2020060915105012670.png',
      characterLocked: false
    },
    {
      id: 4,
      name: 'Venti',
      element: 'anemo',
      imgUrl:
        'https://uploadstatic-sea.mihoyo.com/contentweb/20191122/2019112211143037621.png',
      characterLocked: false
    },
    {
      id: 5,
      name: 'Barbara',
      element: 'hydro',
      imgUrl:
        'https://uploadstatic-sea.mihoyo.com/contentweb/20200609/2020060915102571828.png',
      characterLocked: true
    },
    {
      id: 7,
      name: 'Lisa',
      element: 'electro',
      imgUrl:
        'https://uploadstatic-sea.mihoyo.com/contentweb/20191009/2019100915323235059.png',
      characterLocked: false
    }
  ]

  const options = [
    {
      name: 'delete',
      Icon: FiTrash,
      onClick: () => console.log('eae')
    },
    {
      name: 'save',
      Icon: FiSave,
      onClick: () => console.log('eae')
    },
    {
      name: 'share',
      Icon: FiShare2,
      onClick: () => console.log('eae')
    },
    {
      name: 'continue',
      Icon: FiArrowRightCircle,
      onClick: () => console.log('eae')
    }
  ]

  const [characterList, setCharacterList] = useState<Array<ICharacter>>(
    characters.slice(0, 3)
  )

  const shuffle = array => {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  const onSpacePressed = (e: KeyboardEvent) => {
    const { code } = e
    if (code === 'Space') {
      const newCharacterList = Object.assign([], shuffle(characters))
      setCharacterList(newCharacterList.slice(0, 3))
    }
  }
  useEffect(() => {
    document.addEventListener('keypress', onSpacePressed)
  }, [])

  const colorsByElement = {
    pyro: '#A92523',
    hydro: '#6BB9C7',
    anemo: '#0B6E4F',
    electro: '#736CED',
    cryo: '#cdfff9',
    geo: '#fa9f42'
  }
  return (
    <Container>
      <Header />
      <CommandBar>
        <CommandBarText>Press space to change character</CommandBarText>
        <CommandBarOptions>
          {options.map(({ name, Icon, onClick }) => (
            <CommandBarItem onClick={onClick} key={name}>
              <Icon />
            </CommandBarItem>
          ))}
        </CommandBarOptions>
      </CommandBar>
      <CharacterContainer>
        {characterList.map(({ name, id, element, imgUrl, characterLocked }) => (
          <CharacterCard
            key={id}
            characterName={name}
            color={colorsByElement[element]}
            imgUrl={imgUrl}
            characterLocked={characterLocked}
          />
        ))}
      </CharacterContainer>
    </Container>
  )
}

export default TeamGenerator
