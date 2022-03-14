import React, {Component, MouseEvent} from 'react'

import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

const preventDefault = (event: MouseEvent) => event.preventDefault()

export const Links = () => {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      {/* not sure how to access link theme. perhaps we can add jsut colors */}
      <Link color="#4F3CC9" href="#">
        Link default
      </Link>
      <Link href="#" underline="none">
        {'underline="none"'}
      </Link>
      <Link href="#" underline="hover">
        {'underline="hover"'}
      </Link>
      <Link href="#" underline="always">
        {'underline="always"'}
      </Link>
    </Box>
  )
}
