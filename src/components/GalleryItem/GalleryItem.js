import React from 'react'
import {
    ItemContainer,
    TextWrapper,
    PreviewImg,
    TextContainer,
    ItemWrapper,
    ImageText
} from './GalleryItem.elements'

const GridItems = ({ half, ...props }) => {
    return (
        <>
            <ItemContainer half={half} >
                <ItemWrapper>
                    <TextContainer >
                        <TextWrapper>
                            <ImageText>{props.header}</ImageText>
                        </TextWrapper>
                    </TextContainer>
                    <PreviewImg src={props.Img} />
                </ItemWrapper>
            </ItemContainer>
        </>
    )
}

export default GridItems;