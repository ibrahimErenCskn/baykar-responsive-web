import React from 'react'
import Carousel from './Coursel'

export default function SectionFour() {
    const items = [
        {
            id: 1,
            text: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
            name: "Ralph Edwards",
            title: "Product Designer",
            url: 'https://i.hizliresim.com/nj2z82i.png',
            headerUrl: 'https://i.hizliresim.com/efy1ex7.png'
        },
        {
            id: 2,
            text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
            name: "Hellen Jummy",
            title: "Team Lead"
        },
        {
            id: 3,
            text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
            name: "Hellena John",
            title: "Co-Founder",
            url: 'https://i.hizliresim.com/flv3kqk.png',
            headerUrl: 'https://i.hizliresim.com/efy1ex7.png'
        },
        {
            id: 4,
            text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
            name: "David Oshodi",
            title: "Manager"
        },
        {
            id: 5,
            text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
            name: "Charolette Hanlin",
            title: "CEO"
        },
    ];
    return (
        <div className='w-full py-20 bg-white sm:bg-quinary'>
            <Carousel items={items} />
        </div>
    )
}
