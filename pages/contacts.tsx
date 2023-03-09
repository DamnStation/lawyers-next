import ContactsLinks from '@/components/ContactsLinks'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Contacts: NextPage = () => {

  return (
    <>
      <Head>
        <title>Грошев и партньори Контакти</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='flex items-center min-h-full min-w-full flex-col gap-5'>
        <h1 className='text-lg self-center gap-8'>????„Грошев и парньори” се намира на следният адрес:????</h1>
        <div>
          <iframe
            title='България, София 1000, ул. "Княз Борис I" 85'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.4029847698835!2d23.318198499999994!3d42.6951872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856b8f154467%3A0xcb279c0c2217e1b9!2z0YPQuy4g4oCe0JrQvdGP0Lcg0JHQvtGA0LjRgSBJ4oCcIDg1LCAxMDAwINCh0L7RhNC40Y8g0YbQtdC90YLRitGALCDQodC-0YTQuNGP!5e0!3m2!1sbg!2sbg!4v1678132382012!5m2!1sbg!2sbg"
            className='md:w-[600px] md:h-[450px] w-[350px] h-[400px]'
            allowFullScreen={false}
            //loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <h1 className='text-lg self-center'>????Също така не се колебайте да се свържете с нас на телефон или електронна поща:????:</h1>
        <div className='flex-col'>
          <ContactsLinks />
        </div>
      </div>
    </>
  )
}

export default Contacts