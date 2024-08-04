import { ArrowRight } from '@carbon/icons-react'
import { Button } from '@carbon/react'
import { useState, useRef, useEffect } from 'react'

export default function PButton() {
  const [buttonText, setButtonText] = useState('Click Me')

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Button renderIcon={ArrowRight}>
        <span contentEditable onBlur={(e) => setButtonText(e.target.innerText)}>
          {buttonText}
        </span>
      </Button>
    </div>
  )
}
