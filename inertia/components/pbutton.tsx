import { ArrowRight } from '@carbon/icons-react'
import { Button } from '@carbon/react'
import { useState } from 'react'

interface PButtonProp {
  value: string
  variant: 'primary' | 'secondary' | 'tertiary' 
}

export default function PButton({ value = 'Button', variant = 'primary' }: PButtonProp) {
  const [buttonText, setButtonText] = useState(value)

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Button className="w-full md:w-auto" kind={variant} renderIcon={ArrowRight}>
        <span contentEditable onBlur={(e) => setButtonText(e.target.innerText)}>
          {buttonText}
        </span>
      </Button>
    </div>
  )
}
