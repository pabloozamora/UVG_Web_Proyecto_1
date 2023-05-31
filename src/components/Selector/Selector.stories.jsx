import React from 'react'
import Selecctor from './Selector'

export default {
  title: 'Components/Selector',
  component: Selecctor,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div style={{ backgroundColor: '#000' }}>
    <Selecctor {...args} />
  </div>
)

export const AsSelector = Template.bind({})
AsSelector.args = {
  color: 'gray',
  title: 'Título de prueba',
  subtitle: 'Subtítulo de prueba',
  elements: [
    {
      title: 'JUJUTSU KAISEN',
      subtitle: 'Sub | Dob',
      src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpe',
    },
    {
      title: 'One Piece',
      subtitle: 'Subtitulado',
      src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f154230aab3191aba977f337d392f812.jpe',
    },
    {
      title: 'Hunter x Hunter',
      subtitle: 'Subtitulado',
      src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cbb55a6382682bf71e91f685c6473c5a.jpe',
    },
    {
      title: 'SPY x FAMILY',
      subtitle: 'Sub | Dob',
      src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe',
    },
    {
      title: 'My Hero Academia',
      subtitle: 'Subtitulado',
      src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/251524e3b5517b689317437d881eccf0.jpe',
    },
    {
      title: 'The Quintessential Quintuplets (Go-Toubun no Hanayome)',
      subtitle: 'Sub | Dob',
      src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a6279fc503fe64b451a0e63afc65828.jpe',
    }],
}
