import React from 'react'
import Header from "@/components/Header";
import {dummyCards} from "@/constants";
import VideoCard from "@/components/VideoCard";

const Page = async ({ params }: ParamsWithSearch) => {
    const { id } = await params;
    return (

        <div className={"wrapper page"}>
            <Header subHeader={"kunalkkchaudhar@gmail.com"} title={"Kunal Chaudhary"} userImg={"/assets/images/dummy.jpg"} />
            <section className={"video-grid"}>
                {dummyCards.map((card) => (
                    <VideoCard {...card} key={card.id} />
                ))}
            </section>
        </div>
    )
}
export default Page
