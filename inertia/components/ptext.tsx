import { Section, Heading } from '@carbon/react'
import { useState, useRef, useEffect } from 'react'

export default function PText(props: any) {
  const [headingText, setHeadingText] = useState('rendered as h5')

  return (
    <>
      <Heading
        contentEditable
        defaultValue={'render as h5'}
        onBlur={(e) => setHeadingText(e.currentTarget.innerText ?? '')}
      >
        {headingText}
      </Heading>
      {headingText}
    </>
  )
}
