import React from 'react'
import Preview1 from './Preview1'

export default {
  title: 'Components/Preview1',
  component: Preview1,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div style={{ backgroundColor: '#000' }}>
    <Preview1 {...args} />
  </div>
)

export const AsPreview1 = Template.bind({})
AsPreview1.args = {
  title: 'Título de prueba',
  subtitle: 'Subtítulo de prueba',
  description: 'Esto es una descripción de prueba. Esto es una descripción de prueba. Esto es una descripción de prueba. Esto es una descripción de prueba.',
  src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3f283002b47c62b1e5d311c45f95c97e.jpe',
}
