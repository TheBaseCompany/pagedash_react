import { ArrowRight } from '@carbon/icons-react'
import { Link } from '@carbon/react'
import { useState } from 'react'

interface PLinkProp {
  value: string
}

export default function PLink({ value = 'Button' }: PLinkProp) {
  const [buttonText, setButtonText] = useState(value)

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Link size="lg" renderIcon={() => <ArrowRight aria-label="Arrow Right" />}>
        <span contentEditable onBlur={(e) => setButtonText(e.target.innerText)}>
          {buttonText}
        </span>
      </Link>
    </div>
  )
}
