import React from 'react'
import {
    GalleryItem
} from '../../components'
import {
    Wrapper,
    Section
} from './Home.elements'
import { projects } from './Data'

const Home = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    {projects.map((props, key) => (
                        <GalleryItem
                            key={key}
                            {...props}
                        />
                    ))}
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;