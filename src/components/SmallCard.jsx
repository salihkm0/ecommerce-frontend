import React from 'react'
import { SmallCardDescription, SmallCardHeadding, StyledSmallCard } from '../styles/SmallCardStyle'

export const SmallCard = ({headding,description}) => {
  return (
    <>
        <StyledSmallCard>
            <SmallCardHeadding>{headding}</SmallCardHeadding>
            <SmallCardDescription>{description}</SmallCardDescription>
        </StyledSmallCard>
    </>
  )
}
