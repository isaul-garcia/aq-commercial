import React, { useState } from 'react'
import { SmallSpacer } from '../../globalStyles'
import { Container, InputSection, ObjectiveInput, SendButton } from './FromModule.elements'

const Form = () => {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [objective, setObjective] = useState('')
    const [website, setWebsite] = useState('')
    const [budget, setBudget] = useState('')
    const [email, setEmail] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleObjectiveChange = (event) => {
        setObjective(event.target.value)
    }
    const handleWebsiteChange = (event) => {
        setWebsite(event.target.value)
    }
    const handleBudgetChange = (event) => {
        setBudget(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    return (
        <>
            <Container>
                <form action="https://formsubmit.co/c2e36065a7b4566d00310bd71bdd720e" method="POST">
                    <InputSection>
                        <h5>Name</h5>
                        <input
                            type="text"
                            name="NAME"

                            id='name'
                            value={name}
                            onChange={handleNameChange}

                            required
                        />
                    </InputSection>
                    <InputSection>
                        <h5>Email</h5>
                        <input
                            type="text"
                            name="EMAIL"

                            id='email'
                            value={email}
                            onChange={handleEmailChange}

                            required
                        />
                    </InputSection>
                    <InputSection>
                        <h5>Business website</h5>
                        <input
                            type="text"
                            name="WEBSITE"

                            id='website'
                            value={website}
                            onChange={handleWebsiteChange}

                            required
                        />
                    </InputSection>
                    <InputSection>
                        <h5>Shoot Title</h5>
                        <input
                            type="text"
                            name="TITLE"

                            id='title'
                            value={title}
                            onChange={handleTitleChange}

                            required
                        />
                    </InputSection>
                    <InputSection>
                        <h5>What business challenges are you looking to tackle?</h5>
                        <ObjectiveInput
                            type="text"
                            name="OBJECTIVE"

                            id='objective'
                            value={objective}
                            onChange={handleObjectiveChange}

                            required
                        />
                    </InputSection>
                    <InputSection>
                        <h5>What is your budget?</h5>
                        <input
                            type="text"
                            name="BUDGET"

                            id='budget'
                            value={budget}
                            onChange={handleBudgetChange}

                            required
                        />
                    </InputSection>
                    <input type="hidden" name="_next" value="https://aq-commercial.vercel.app/#/" />
                    <SmallSpacer />
                    <SendButton type="submit">Send</SendButton>
                </form>
            </Container>
        </>
    )
}

export default Form;