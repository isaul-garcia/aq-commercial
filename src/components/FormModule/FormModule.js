import React, { useState } from 'react'
import { SmallSpacer } from '../../globalStyles'
import { Container, InputSection, MyForm, ObjectiveInput, Section, TextWrapper } from './FromModule.elements'

const Form = ({ data, where, format, photoType, vidType, scene, amount, addons, page }) => {
    const [title, setTitle] = useState('')
    const [objective, setObjective] = useState('')
    const [url, setUrl] = useState('')
    const [email, setEmail] = useState('')

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleObjectiveChange = (event) => {
        setObjective(event.target.value)
    }
    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    return (
        <>
            <Container page={page}>
                <TextWrapper>
                    <h2>{data.info.main}</h2>
                    <h3>{data.info.sub}</h3>
                </TextWrapper>
                <Section>
                    <MyForm >
                        <form action="https://formsubmit.co/c2e36065a7b4566d00310bd71bdd720e" method="POST">
                            <input type="hidden" name="WHERE" value={where} />
                            <input type="hidden" name="FORMAT" value={format} />
                            <input type="hidden" name="PHOTO" value={photoType} />
                            <input type="hidden" name="VIDEO" value={vidType} />
                            <input type="hidden" name="SCENE" value={scene} />
                            <input type="hidden" name="AMOUNT" value={amount} />
                            <input type="hidden" name="ADDONS" value={addons} />

                            <InputSection>
                                <h5>Give your shoot a name <span style={{color: "red"}}>*</span></h5>
                                <input
                                    type="text"
                                    name="TITLE"

                                    id='title'
                                    value={title}
                                    onChange={handleTitleChange}
                                    placeholder="Shoot title"

                                    required
                                />
                            </InputSection>
                            <InputSection>
                                <h5>Shoot goal or objective</h5>
                                <ObjectiveInput
                                    type="text"
                                    name="OBJECTIVE"

                                    id='objective'
                                    value={objective}
                                    onChange={handleObjectiveChange}
                                    placeholder="What product or item will we be capturing at your shoot? Are you refeshing your content or building out you amazon page? Where will this content be featured?"
                                />
                            </InputSection>
                            <InputSection>
                                <h5 style={{ display: "inline" }}>Moodboard</h5>
                                <input
                                    type="text"
                                    name="URL"

                                    id='url'
                                    value={url}
                                    onChange={handleUrlChange}
                                    placeholder="Paste link"
                                />
                            </InputSection>
                            <InputSection>
                                <h5>Let us contact you back <span style={{color: "red"}}>*</span></h5>
                                <input
                                    type="text"
                                    name="EMAIL"

                                    id='email'
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="What's your email?"

                                    required
                                />
                            </InputSection>
                            <input type="hidden" name="_next" value="#/thankyou" />
                            <SmallSpacer />
                            <button type="submit" style={{float: 'right'}}>Submit</button>
                        </form>
                    </MyForm>
                </Section>
            </Container>
        </>
    )
}

export default Form;