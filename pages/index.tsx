import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Грошев и партньори</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='flex flex-col justify-between items-center min-h-full w-full max-w-4xl text-center p-4 self-center' >
        <h2 className='text-lg'>„Грошев и партньори”</h2>
        <p className='text-base'> „Грошев и партньори” е Адвокатско дружество обединило дейността на двамата управляващи съдружници – адвокат Иван Тодоров Грошев и адвокат Гина Иванова Грошева.
          Екипът на адвокатско дружество „Грошев и парньори” е специализирано в различните области на правото.
          Управляващият съдружник - адв. Иван Грошев, е специалист в сферата на наказателното право с повече от 27 години опит, от които 21 като адвокат, а адв. Гина Грошева e специалист в сферата на публичното, гражданско право и процес, по-конкретно във вещно, облигационно и търговско право, банково и застрахователно право.
          Кантората има значителен опит в извънсъдебно и съдебно събиране на вземания, както и производства по несъстоятелност. На нашият опит и професионализъм са се доверили редица небанкови финансови институции, лизингови компании и инвестиционни банки.
          Нашият екип има опит и при консултиране на инвеститори за строителство на офис и жилищни сгради, както и правна помощ и съдействие при продажбата на трети лица на отделните недвижими имоти.
          Всеки от адвокатите е наложил се професионалист – с широк и дългогодишен опит в отрасъла на правото, в който специализира и отличен опит в процесуалното представителство.
          С високия професионализъм на своя екип, дружеството напълно отговаря на изискванията на своите клиенти за ефективност, резултатност, експертно и всеобхватно обслужване.
        </p>
      </div>
    </>
  )
}
export default Home
