import React from 'react';
import styled from 'styled-components'
import VoiceCard from '../voice-cards/voice-cards.component'

class ContainerComponent extends React.Component {
    render() {
        return (
            <ContainerStyle>
              <input type="text" name="Insert text"></input>
              {
                getVoices.map(voice => {
                  return <VoiceCard  key={voice.name}>{voice.name}</VoiceCard>
                })
              }
            </ContainerStyle>
        )
    }
}

const getVoices = () => {
  return new Promise(resolve => {
    let voices = speechSynthesis.getVoices()
    if (voices.length) {
      resolve(voices)
      return
    }
    speechSynthesis.onvoiceschanged = () => {
      voices = speechSynthesis.getVoices()
      resolve(voices)
    }
  })
}

const voicesList = async () => {
  ;(await getVoices()).forEach(voice => {
    console.log(voice.name, voice.lang)
  })
}


const printVoicesList = async () => {
  ;(await getVoices()).forEach(voice => {
    console.log(voice.name, voice.lang)
  })
}


//printVoicesList()

const ContainerStyle = styled.div`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default ContainerComponent;