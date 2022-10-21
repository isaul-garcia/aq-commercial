import React from 'react'
import {
    GalleryItem, Navbar
} from '../../components'
import {
    Wrapper,
    Section
} from './Photos.elements'
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