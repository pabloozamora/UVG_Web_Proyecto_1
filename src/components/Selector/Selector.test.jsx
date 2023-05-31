/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Selector from './Selector'

describe('Selector', () => {
  it('Renderiza el color correcto', () => {
    render(
      <Selector
        title="¿Por qué tienes ese pelo?"
        subtitle="Es solo un poco de gel"
        color="gray"
        elements={[
          {
            title: 'Yu-Gi-Oh!',
            subtitle: 'Sub | Dob',
            src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/837409ac43551c978dd2978d3a55f92a.jpe',
          },
          {
            title: 'Bungo Stray Dogs',
            subtitle: 'Sub | Dob',
            src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f97923c80c70c98675c4f66ddb6c3782.jpe',
          },
          {
            title: 'Trigun',
            subtitle: 'Sub | Dob',
            src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/067ba823fe77aa4f5fdc8249a6458b31.jpe',
          },
          {
            title: 'Devil May Cry',
            subtitle: 'Subtitulado',
            src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6e09c762184cd94b098a8904242e066f.jpe',
          },
          {
            title: 'BLUELOCK',
            subtitle: 'Sub | Dob',
            src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/585041e91bb7168df89a98eb5318d88c.jpe',
          },
          {
            title: 'Dr. STONE',
            subtitle: 'Sub | Dob',
            src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/29e0d306dbff3a163acadf66a35b3cf5.jpe',
          },
        ]}
      />,
    )

    const divisor = screen.getByTestId('divisor')
    expect(divisor).toHaveStyle('background-image: linear-gradient(to left,#213944,#2abdbb)')
  })
})
