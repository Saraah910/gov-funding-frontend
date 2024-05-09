import { ministryPeople } from "./ministryData"
import Image from "next/image"
import { Button } from "web3uikit"
export default function CardComponent({tag}){

    return(
        <div style={{display:"flex",flexDirection:"column", gap:"20px", padding:"1px 8px 1px 8px"}}>
            {ministryPeople.map((item,index) => (
                <div className="ministry-card" key={index}>
                    <Image style={{borderRadius:"5px"}} src={item.img} width={150} height={143} alt='state-ministry'/>
                    <h4>{item.name}</h4>
                    <Button theme="" text={item.designation}/>
                </div>
            ))}

        </div>
        
    )
}