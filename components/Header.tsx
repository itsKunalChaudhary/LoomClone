import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {ICONS} from "@/constants";
import DropdownList from "@/components/DropdownList";

const Header = ( { subHeader, title, userImg } : SharedHeaderProps ) => {
    return (
        <header className={"header"}>
            <section className={"header-container"}>
                <div className={"details"}>
                    {userImg && (
                        <Image src={ userImg } alt={"User Image"} width={66} height={66} className={"rounded-full"} />
                    )}
                    <article>
                        <p>{subHeader}</p>
                        <h1>{title}</h1>
                    </article>
                </div>

                <aside>
                    <Link href={"/upload"}>
                        <Image src={"/assets/icons/upload.svg"} alt={"Upload Icon"} width={16} height={16} />
                        <span>Upload a Video</span>
                    </Link>
                    <div className={"record"}>
                        <button className={"primary-btn"}>
                            <Image src={ICONS.record} alt={"Record Icon"} width={16} height={16} />
                            <span>Record</span>
                        </button>
                    </div>
                </aside>
            </section>
            <section className={"search-filter"}>
                <div className={"search"}>
                    <input type={"text"}
                        placeholder={"Search for Videos, Tags, Folders..."}
                    />
                    <Image src={"/assets/icons/search.svg"} alt={"Search"} width={16} height={16} />
                </div>
                <DropdownList />
            </section>
        </header>
    )
}
export default Header
