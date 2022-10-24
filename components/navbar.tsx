import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown,faSearch } from "@fortawesome/free-solid-svg-icons"

import Image from 'next/image'
import styles from "../styles/navbar.module.scss"

import DropDown from "react-bootstrap/Dropdown"
import Link from 'next/link'
export default function Navbar(){
    const logoPngURL = "https://firebasestorage.googleapis.com/v0/b/omnio-eb0f4.appspot.com/o/Logo.png?alt=media&token=40e6ac65-48be-488d-9393-d2104b32b360"
    const logoSvgURL = "https://firebasestorage.googleapis.com/v0/b/omnio-eb0f4.appspot.com/o/Logo.svg?alt=media&token=2a3c0f78-91fd-46d9-9aa1-c9d318f8fd5f"
    const ukFlagURL= "https://firebasestorage.googleapis.com/v0/b/omnio-eb0f4.appspot.com/o/UK.png?alt=media&token=04d006fc-70d8-4bf6-8285-374494cb1d0b"


    return(
            <nav className={styles.header}>
                <img src={logoSvgURL} width={165} height={58}/>
                <div className={styles.navRight}>
                    <div ><Link href="/">Home</Link></div>
                    
                    <DropDown navbar={true}>
                        <DropDown.Toggle variant="none">Category</DropDown.Toggle>
                        <DropDown.Menu variant="light">
                            <DropDown.Item><Link href="/category/technology">Technology</Link></DropDown.Item>
                            <DropDown.Item><Link href="/category/coding">Coding</Link></DropDown.Item>
                        </DropDown.Menu>
                    </DropDown>
                    
                    <div><Link href="/authors">Authors</Link></div>
                    <div><FontAwesomeIcon icon={faSearch}/></div>

                    <DropDown navbar={true}>
                        <DropDown.Toggle variant="none"><Image src={ukFlagURL} width={28} height={21}/></DropDown.Toggle>
                        <DropDown.Menu variant="light">
                            <DropDown.Item><Image src={ukFlagURL} width={28} height={21}/> TUR</DropDown.Item>
                            <DropDown.Item><Image src={ukFlagURL} width={28} height={21}/> UK</DropDown.Item>
                        </DropDown.Menu>
                    </DropDown>

                </div>
            </nav>
        )
}