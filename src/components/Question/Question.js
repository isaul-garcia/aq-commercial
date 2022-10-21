import React, { useState } from 'react'
import {
    GridItems
} from '../../components'
import {
    Wrapper,
    Section,
    TextWrapper
} from './Question.elements'

const Question = ({ data, choices, setChoices, onlyOne, hide, page, ...props }) => {
    const [oneChosen, setOneChosen] = useState(false)

    const handleChosen = (answer) => {
        let arr = choices
        if (onlyOne === true) {
            arr = answer
        } else if (!arr.includes(answer)) {
            arr.push(answer);
        } else {
            arr = arr.filter(c => c !== answer)
        }
        setChoices(arr)
    }

    const handleOneChosen = (answer) => {
        setChoices(answer)
    }

    return (
        <>
            <Wrapper hide={hide} page={page}>
                <Section>
                    {data.options ? data.options.map((props) => (
                        <GridItems
                            onlyOne={onlyOne}
                            choices={choices}
                            setChoices={setChoices}
                            oneChosen={oneChosen}
                            setOneChosen={setOneChosen}
                            handleChosen={handleChosen}
                            handleOneChosen={handleOneChosen}
                            half={data.info.half}
                            key={props.key}
                            {...props}
                        />
                    )) : null}
                </Section>
                <TextWrapper>
                    <h2>{data.info.main}</h2>
                    <h3>{data.info.sub}</h3>
                </TextWrapper>
            </Wrapper>
        </>
    )
}

export default Question;