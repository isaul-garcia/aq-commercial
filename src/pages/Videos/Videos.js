import React from 'react'
import {
    GalleryItem, Navbar
} from '../../components'
import {
    Wrapper,
    Section
} from './Videos.elements'
import { projects } from './Data'

const Home = () => {
    return (
        <>
        <Navbar />
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