import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Approvals from './approvals'
import Proposal from './Proposals'
import { Information,Hero, Card, Button } from 'web3uikit'
import ContinuousTextStream from './ContinuousTextStream'
import CardComponent from './CardComponent'
import { useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isFinanceMinister, setIsFinanceMinister] = useState(true)
  return (
    <div>
      <div className='home-hero-1'>
        <Image src={"/home-page-1.png"} width={400} height={300} alt='Home-img'></Image>
        <Image src={"/home-logo-3.jpg"} width={400} height={300} alt='Home-img-2'></Image>
        <Image src={"/home-pic-2.jpg"} width={400} height={300} alt='Home-img-2'></Image>
        
      </div>
      <div>
        <ContinuousTextStream/>
      </div>
      <div className='home-hero-2'>        
        <div style={{width:"720px"}}>
          <Card 
            title="Shri N.K. Singh: Chairman of 15th Finance Commission of India"
            description="The Finance Commission is a Constitutionally mandated body that is at the centre of fiscal federalism. Set up under Article 280 of the Constitution, its core responsibility is to evaluate the state of finances of the Union and State Governments, recommend the sharing of taxes between them, lay down the principles determining the distribution of these taxes among States. Its working is characterised by extensive and intensive consultations with all levels of governments, thus strengthening the principle of cooperative federalism. Its recommendations are also geared towards improving the quality of public spending and promoting fiscal stability. The first Finance Commission was set up in 1951 and there have been fifteen so far. Each of them has faced its own unique set of challenges.

            The Fifteenth Finance Commission was constituted on 27 November 2017 against the backdrop of the abolition of Planning Commission (as also of the distinction between Plan and non-Plan expenditure) and the introduction of the goods and services tax (GST), which has fundamentally redefined federal fiscal relations.
            
            The Terms of Reference of the current Commission have some distinctive features, including recommending monitorable performance criteria for important national flagship programmes and examining the possibility of setting up a permanent non lapsable funding for India’s defence needs. The reorganisation of the State of Jammu and Kashmir into two Union Territories – one of Jammu and Kashmir and one of Ladakh – presents a new dynamic. On the whole the Finance Commission faces new challenges in the process of the evolution of our federal polity. As an important Constitutional entity, the Commission is committed to balancing competing claims and priorities among all three tiers of government in a credible manner.
            
            "
          >
            <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
              <h3 style={{textAlign:"center"}}>Chairman Message</h3>
              <Image className="circularImage" style={{alignItems:"center"}} src={"/chairman.jpg"} width={140} height={140} alt='chairman-img'></Image>
        
            </div>
          </Card>
        </div>
        <div className='home-hero-3'> {/*column*/}
            <CardComponent/>

        </div>
      </div>
      <div className='home-badge'>
        <Link  className="home-links" href={"/Proposals"}>
          <Button size="xl" theme='colored' color='yellow' text='State-wise Budget Proposals'/>
        </Link>
        <Link className="home-links" href={"/approvals"}>
          <Button size="xl" theme='colored' color='yellow' text='State-wise Budget Approvals'/>
        </Link>
        <Link className="home-links" href={"/"}>
          <Button size="xl" theme='colored' color='yellow' text='Tax Calculation'/>
        </Link>
        <Link className="home-links" href={"/"}>
          <Button size="xl" theme='colored' color='yellow' text='Union Budget and Economic Survey'/>
        </Link>
        
      </div>
    </div>
    

  )
}
