import { Section, Heading } from '@carbon/react'
import { useState, useRef, useEffect } from 'react'

interface PTextProp {
  value: string
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'paragraph' | 'span'
}

export default function PText({ value = 'This is text', variant = 'h1' }: PTextProp) {
  const [headingText, setHeadingText] = useState(value)
  const headingLevelMap = {
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4,
    h5: 5,
  }

  if (variant === 'paragraph') {
    return (
      <p
        contentEditable
        defaultValue={'render as h5'}
        className="w-fit text-black"
        onBlur={(e) => setHeadingText(e.currentTarget.innerText ?? '')}
      >
        {value}
      </p>
    )
  } else if (variant === 'span') {
    return (
      <span
        contentEditable
        defaultValue={'render as h5'}
        className="w-fit text-black"
        onBlur={(e) => setHeadingText(e.currentTarget.innerText ?? '')}
      >
        {value}
      </span>
    )
  } else {
    return (
      <Section level={headingLevelMap[variant]}>
        <Heading
          contentEditable
          defaultValue={'render as h5'}
          className="w-fit text-black"
          onBlur={(e) => setHeadingText(e.currentTarget.innerText ?? '')}
        >
          {headingText}
        </Heading>
      </Section>
    )
  }
}
