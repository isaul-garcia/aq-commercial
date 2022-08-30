import React, { useState } from 'react'
import {
    Form,
    PreQuestion,
    Question
} from '../../components'
import { Wrapper } from '../../globalStyles'
import * as q from './Data'

const Home = () => {
    const [where, setWhere] = useState([])
    const [format, setFormat] = useState([])
    const [photoType, setPhotoType] = useState([])
    const [vidType, setVidType] = useState([])
    const [scene, setScene] = useState([])
    const [amount, setAmount] = useState([])
    const [addons, setAddons] = useState([])

    const [photo, setPhoto] = useState(true)
    const [vid, setVid] = useState(true)

    const checkFormat = (action, ans) => {
        if (ans === "$19 Photos") {
            if (action === true) {
                setPhoto(true)
                setPhotoType([])
            } else if (action === false) {
                setPhoto(false)
            }
        } else if (ans === "$69 Video Clips") {
            if (action === true) {
                setVid(true)
                setVidType([])
            } else if (action === false) {
                setVid(false)
            }
        } else {
            console.log("Error detecting answer")
        }
    }

    return (
        <>
            <Wrapper>
                <Question data={q.isRemote} choices={where} setChoices={setWhere} onlyOne />
                <PreQuestion data={q.whatFormat} choices={format} setChoices={setFormat} checkFormat={checkFormat}/>
                <Question hide={photo} data={q.whatTypePhoto} choices={photoType} setChoices={setPhotoType} />
                <Question hide={vid} data={q.whatTypeVideo} choices={vidType} setChoices={setVidType} />
                <Question data={q.whatScene} choices={scene} setChoices={setScene} />
                <Question data={q.howMany} choices={amount} setChoices={setAmount} onlyOne />
                <Question data={q.addOns} choices={addons} setChoices={setAddons} />
                <Form
                    data={q.moreDetails}
                    where={where}
                    format={format}
                    photoType={photoType}
                    vidType={vidType}
                    scene={scene}
                    amount={amount}
                    addons={addons}
                />
            </Wrapper>
        </>
    )
}

export default Home;