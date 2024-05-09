import Link from "next/link"
import { useState } from "react"
import { Dropdown, ConnectButton, Button, Tab, TabList } from "web3uikit"
import {Mail} from '@web3uikit/icons'
import Image from "next/image"
import { Router, useRouter } from "next/router"

export default function NavBar(){
    const [selected, setSelected] = useState("")
    const router = useRouter()
    const handleDropdownChange = (event) => {
        // const warning = "This page contains the confidential information of goverment of India, any violation to the protocols can cause serious imprisonment by law."
        // if (window.confirm(`${warning} Are you sure to open ${event.label} page?`)){
        //     window.location = `/${event.id}`
        // }
        router.push(`/${event.id}`)
        
    }
    return(
        <div className="main-navbar">
            <div style={{lineHeight:"3px"}} className="navbar-title-subtitle">
                <Image src={"/navbar-logo.jpeg"} width={60} height={60} alt='logo-img'></Image>
                <div>
                    <Link href={"/"} style={{fontSize:25, textDecoration:"none"}}><p>Indian Finance Commission</p></Link>
                    <p>सत्यमेव जयते</p>
                </div>                
            </div>
            <div className="navbar-half">
                <div>
                    <Link style={{textDecoration:"none", color:"black",fontSize:17}} href={"/FinanceCommissions"}>
                        <Button size="large" text="Finance Commissions"></Button>
                    </Link>
                </div>
                <div>
                    <Dropdown
                    label="All Services : "
                    showSelected={true}
                    onChange={handleDropdownChange}
                    onComplete={true}
                    dropdownArrowType="filled"
                    options={[
                        {
                            id: '',
                            label: '🚫None'
                        },
                        {
                            id: 'Proposals',
                            label: 'See All Proposals'
                        },
                        {
                            id: 'approvals',
                            label: 'Gov Approvals'
                        },
                        {
                            id: 'Mainent',
                            label: 'Mainent'
                        }
                    ]}
                    />
                </div>
                <div>
                    <Button  text="+ New Proposal" theme="primary"/>
                </div>
                <div>                                  
                    <Button theme="colored" color="red" text="📩 Inbox"></Button>                    
                </div>
                <div>
                    <ConnectButton moralisAuth={true}/>
                </div>
            </div>
            
        </div>
    )
}

