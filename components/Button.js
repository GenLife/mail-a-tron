import { Box, Item } from 'react-html-email'

export default ({ href }) => (
  <Box align='center' style={{ padding: '20px' }}>
    <Item
      align='center'
      valign='top'
      style={{ padding: '15px 25px' }}
      bgcolor='#256F9C'
    >
      <a
        href={href}
        target='_blank'
        style={{
          fontSize: '16px',
          fontFamily: 'Helvetica',
          color: '#ffffff',
          textDecoration: 'none',
          display: 'inline'
        }}>
        Watch Now →
      </a>
    </Item>
  </Box>
)
