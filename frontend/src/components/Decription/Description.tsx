import React from 'react'
interface Content {
    description: string;
    largeDescription: string;
}
const Description: React.FC<Content> = ({description, largeDescription}) => {
  return (
    <div>
        <h3>Description</h3>
        <h3>Additional Information</h3>
        <p>{description}</p>
        <p>{largeDescription}</p>
    </div>
  )
}

export default Description