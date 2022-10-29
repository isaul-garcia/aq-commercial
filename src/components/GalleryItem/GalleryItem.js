import React from 'react'
import {
    ItemContainer,
    TextWrapper,
    PreviewImg,
    TextContainer,
    ItemWrapper,
    ImageText,
    ImgWrapper
} from './GalleryItem.elements'

const GridItems = ({ half, ...props }) => {
    return (
        <>
            <ItemContainer half={half} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to={props.url}>
                <ItemWrapper>
                    <TextContainer >
                        <TextWrapper>
                            <ImageText>{props.header}</ImageText>
                        </TextWrapper>
                    </TextContainer>
                    <ImgWrapper>
                        <PreviewImg src={props.Img} />
                    </ImgWrapper>
                </ItemWrapper>
            </ItemContainer>
        </>
    )
}

export default GridItems;