import { Section, Heading } from '@carbon/react'
import { useState, useRef, useEffect } from 'react'

export default function PText(props: any) {
  const [isEditing, setIsEditing] = useState(false)
  const [headingText, setHeadingText] = useState('rendered as h5')
  const [inputWidth, setInputWidth] = useState(0)
  const spanRef = useRef(null)

  useEffect(() => {
    if (spanRef.current) {
      setInputWidth(spanRef.current.offsetWidth)
    }
  }, [headingText])

  const handleSave = () => {
    setIsEditing(false)
    // Add any additional save logic here
  }

  return (
    <>
      <Heading>
        {isEditing ? (
          <input
            style={{
              border: 'none',
              background: 'transparent',
              color: 'inherit',
              fontSize: 'inherit',
              font: 'inherit',
              width: `${inputWidth}px`, // Adjust padding as needed
              padding: 0, // Remove any default padding
              margin: 0, // Remove any default margin
              minWidth: '10px', // Minimum width for the input
              outline: 'none', // Remove outline
            }}
            type="text"
            value={headingText}
            onChange={(e) => setHeadingText(e.target.value)}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            style={{
              font: 'inherit',
              cursor: 'pointer',
            }}
          >
            {headingText}
          </span>
        )}
        <span
          ref={spanRef}
          style={{
            position: 'absolute',
            visibility: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: 'inherit',
          }}
        >
          {headingText}
        </span>
      </Heading>
    </>
  )
}
