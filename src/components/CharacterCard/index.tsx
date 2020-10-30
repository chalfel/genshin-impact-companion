import React, { useState } from 'react'
import { FiGrid, FiUnlock, FiLock, FiInfo, FiStar } from 'react-icons/fi'

import {
  CharacterImage,
  CharacterName,
  Container,
  OptionItem,
  OptionList,
  OptionsContainer
} from './styles'

interface CharacterCardProps {
  color: string
  characterName: string
  imgUrl: string
}
const CharacterCard: React.FC<CharacterCardProps> = ({
  color,
  characterName,
  imgUrl
}: CharacterCardProps) => {
  const [optionsEnabled, setOptionsEnabled] = useState(false)
  const options = [
    {
      name: 'selectCharacter',
      Icon: FiGrid,
      onClick: () => null
    },
    {
      name: 'lockChar',
      Icon: FiUnlock,
      onClick: () => null
    },
    {
      name: 'infoChar',
      Icon: FiInfo,
      onClick: () => null
    },
    {
      name: 'favoriteChar',
      Icon: FiStar,
      onClick: () => null
    }
  ]

  const toggleOptions = () => {
    setOptionsEnabled(prev => !prev)
  }

  return (
    <Container
      color={color}
      onMouseOver={toggleOptions}
      onMouseOut={toggleOptions}
    >
      <CharacterName enabled={optionsEnabled}>{characterName} </CharacterName>
      <CharacterImage src={imgUrl} />
      <OptionsContainer enabled={optionsEnabled}>
        <OptionList>
          {options.map(({ name, Icon, onClick }) => (
            <OptionItem key={name} onClick={onClick}>
              <Icon />
            </OptionItem>
          ))}
        </OptionList>
      </OptionsContainer>
    </Container>
  )
}

export default CharacterCard