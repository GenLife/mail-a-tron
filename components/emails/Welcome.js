import React from 'react'
import Layout from '../Layout'
import { Image, Item, Span, A } from 'react-html-email'
import Button from '../Button'

const rowStyle = {
  width: '300px'
}

// Sets maximum width for each row of content
export default ({ name }) => (
  <Layout>

    {/* Image subtitle Row */}

    <Item
      align='center'
      valign='top'
      style={{ ...rowStyle, paddingBottom: '30px' }}
        >
      <Span
        color='#444444'
        fontSize={25}
      >
        {`Welcome${name ? ' ' + name : ''}!`}
      </Span>
    </Item>

    {/* Video Row */}

    <Item
      align='center'
      valign='top'
      style={rowStyle}
        >
      <A href='http://gen.life'>
        <Image
          data-mc-bar='bar'
          data-mc-baz='baz'
          alt='video-image'
          src='static/video.jpg'
          width={300}
          height={240}
          vspace={20}
            />
      </A>
    </Item>

    {/* Image subtitle Row */}

    <Item
      align='center'
      valign='top'
      style={{ ...rowStyle, padding: '25px 0px' }}
        >
      <Span
        color='#444444'
        fontSize={25}
          >
            Our Greatest Feature Ever
          </Span>
    </Item>

    {/* Text  Row */}

    <Item
      align='center'
      valign='top'
      style={rowStyle}
        >
      <Span
        fontSize={14}
        color='#444444'
        lineHeight={20}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, leo a ullamcorper feugiat, ante purus sodales justo, a faucibus libero lacus a est. Aenean at mollis ipsum.
          </Span>
    </Item>

    {/* Button Row */}

    <Item style={rowStyle}>
      <Button href={'http://gen.life'} />
    </Item>
  </Layout>
)
