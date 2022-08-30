import React, { useState } from 'react'
import {
    GridItems
} from '../../components'
import {
    Wrapper,
    Section,
    TextWrapper
} from './Question.elements'

const Question = ({ data, choices, setChoices, onlyOne, hide, checkFormat, ...props }) => {
    const [oneChosen, setOneChosen] = useState(false)

    const handleChosen = (answer) => {
        let arr = choices
        if (!arr.includes(answer)) {
            arr.push(answer)
            checkFormat(false, answer)
        } else {
            arr = arr.filter(c => c !== answer)
            checkFormat(true, answer)
        }
        setChoices(arr)
    }

    return (
        <>
            <Wrapper hide={props.hide}>
                <TextWrapper>
                    <h2>{data.info.main}</h2>
                    <h3>{data.info.sub}</h3>
                </TextWrapper>
                <Section>
                    {data.options ? data.options.map((props) => (
                        <GridItems
                            onlyOne={onlyOne}
                            choices={choices}
                            setChoices={setChoices}
                            oneChosen={oneChosen}
                            setOneChosen={setOneChosen}
                            handleChosen={handleChosen}
                            half={data.info.half}
                            key={props.key}
                            {...props}
                        />
                    )) : null}
                </Section>
            </Wrapper>
        </>
    )
}

export default Question;