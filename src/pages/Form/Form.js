import React, { useState } from 'react'
import {
    FormModule,
    PreQuestion,
    Progression,
    Question
} from '../../components'
import { Wrapper } from '../../globalStyles'
import * as q from './Data'

const Form = () => {
    const [page, setPage] = useState(1)

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

    const handleNext = () => {
        if (page >= 1 && page < 8) {
            console.log('increase page num')
            const nextPage = page + 1
            setPage(nextPage)
        } else if (page === 8) {
            console.log('stop')
            return null
        }
    }
    
    const handlePrev = () => {
        if (page <= 8 && page > 1) {
            console.log('decrease page num')
            const nextPage = page - 1
            setPage(nextPage)
        } else if (page === 1) {
            console.log('stop')
            return null
        }
    }

    console.log(page)

    return (
        <>
            <Wrapper>
                <div style={{ textAlign: 'center', height: '30vh', marginTop: '100px' }}>
                    <h1>Let's get started with your shoot!</h1>
                    <p>There is a variety of things we offer. Let us know here what you need for your business.</p>
                </div>
                <Question page={page === 1} data={q.isRemote} choices={where} setChoices={setWhere} onlyOne />
                <PreQuestion page={page === 2} data={q.whatFormat} choices={format} setChoices={setFormat} checkFormat={checkFormat} />
                <Question page={page === 3} data={q.whatTypePhoto} choices={photoType} setChoices={setPhotoType} />
                <Question page={page === 4} data={q.whatTypeVideo} choices={vidType} setChoices={setVidType} />
                <Question page={page === 5} data={q.whatScene} choices={scene} setChoices={setScene} />
                <Question page={page === 6} data={q.howMany} choices={amount} setChoices={setAmount} onlyOne />
                <Question page={page === 7} data={q.addOns} choices={addons} setChoices={setAddons} />
                <FormModule
                    page={page === 8}
                    data={q.moreDetails}
                    where={where}
                    format={format}
                    photoType={photoType}
                    vidType={vidType}
                    scene={scene}
                    amount={amount}
                    addons={addons}
                />
                <Progression page={page} handleNext={handleNext} handlePrev={handlePrev}/>
            </Wrapper>
        </>
    )
}

export default Form;