import React, { useState } from 'react'
import { useEffect } from 'react'
import {
    ItemContainer,
    TextWrapper,
    PreviewImg,
    TextContainer,
    ItemWrapper,
    ImageText,
    HoverHelper
} from './GridItems.elements'

const OnlyOneChoice = ({ half, answer, choices, setIsChosen, isChosen, handleOneChoice, header, Img, description }) => {
    const checkChoice = () => {
        if (choices === answer) {
            setIsChosen(true)
        } else if (choices !== answer && choices[0] === undefined) {
            setIsChosen(false)
        } else {
            setIsChosen(false)
        }
    }

    useEffect(() => {
        checkChoice()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [choices]);

    return (
        <>
            <ItemContainer half={half} onClick={handleOneChoice}>
                <ItemWrapper>
                    <HoverHelper isChosen={isChosen}>
                        <TextContainer>
                            <TextWrapper>
                                <ImageText>{header}</ImageText>
                            </TextWrapper>
                        </TextContainer>
                    </HoverHelper>
                    <PreviewImg isChosen={isChosen} src={Img} />
                </ItemWrapper>
            </ItemContainer>

        </>
    )
}

const GridItems = ({ half, choices, setChoices, handleChosen, handleOneChosen, onlyOne, oneChosen, setOneChosen, ...props }) => {
    const [isChosen, setIsChosen] = useState(false)

    const handleChoice = () => {
        setIsChosen(!isChosen)
        handleChosen(props.answer)
    }

    const handleOneChoice = () => {
        handleOneChosen(props.answer)
    }

    return (
        <>
            {onlyOne ?
                <OnlyOneChoice
                    half={half}
                    choices={choices}
                    handleOneChoice={handleOneChoice}
                    isChosen={isChosen}
                    setIsChosen={setIsChosen}
                    header={props.header}
                    description={props.description}
                    Img={props.Img}
                    answer={props.answer}
                />
                :
                <ItemContainer half={half} onClick={handleChoice}>
                    <ItemWrapper>
                        <HoverHelper isChosen={isChosen}>
                            <TextContainer >
                                <TextWrapper>
                                    <ImageText>{props.header}</ImageText>
                                </TextWrapper>
                            </TextContainer>
                        </HoverHelper>
                        <PreviewImg isChosen={isChosen} src={props.Img} />
                    </ItemWrapper>
                </ItemContainer>
            }

        </>
    )
}

export default GridItems;