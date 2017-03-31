import { Box, Item, Image, Span, injectReactEmailAttributes } from 'react-html-email'

// Expand React attributes to support emails
injectReactEmailAttributes()

export default ({ children }) => (
  <Box
    width='100%'
    height='100%'
  >

    {/* Header with Logo */}

    <Item
      align='center'
      bgcolor='#333333'
      style={{ padding: '20px' }}>
      <Image
        data-mc-bar='bar'
        data-mc-baz='baz'
        alt='logo'
        src='static/logo.png'
        width={60}
        height={60}
        vspace={10}
      />
    </Item>

    {/* Body */}

    <Item>
      <Box
        width='100%'
        style={{ padding: '20px', backgroundColor: '#D8F1FF' }}
      >
        <Item>
          <Box
            align='center'
            style={{ padding: '20px' }}
          >
            { children }
          </Box>
        </Item>
      </Box>
    </Item>

    {/* Footer */}

    <Item
      align='center'
      style={{ padding: '20px 0px' }}
    >
      <Span>Powered by</Span>
      <Image
        data-mc-bar='bar'
        data-mc-baz='baz'
        alt='logo'
        src='static/genlife.png'
        width={100}
        height={37.48}
      />
    </Item>
  </Box>
)
