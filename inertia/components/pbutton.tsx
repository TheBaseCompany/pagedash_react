import { ArrowRight } from '@carbon/icons-react'
import { Button } from '@carbon/react'
import { useState, useRef, useEffect } from 'react'

export default function PButton(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [buttonText, setButtonText] = useState('Click Me')
  const [inputWidth, setInputWidth] = useState(0)
  const spanRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (spanRef.current) {
      setInputWidth(spanRef.current.offsetWidth)
    }
  }, [buttonText])

  const handleSave = () => {
    setIsEditing(false)
    // Add any additional save logic here
  }

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      handleSave()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Button renderIcon={ArrowRight}>
        <span
          contentEditable
          onInput={(e) => setButtonText(e.currentTarget.textContent ?? '')}
          style={{ cursor: 'pointer' }}
        >
          hello
        </span>
      </Button>
      <span
        ref={spanRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          fontSize: 'inherit',
        }}
      >
        {buttonText}
      </span>
    </div>
  )
}
