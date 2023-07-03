import Head from 'next/head'
import Image from 'next/image'
import { Inter, ZCOOL_KuaiLe } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useTranslation } from "react-i18next";

const inter = Inter({ subsets: ['latin'] })
import React from 'react';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';

export default function App () {
  const {t} = useTranslation(); 


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div>
      
      <button onClick={() => changeLanguage('en')}>ENGLISH</button>
      <button onClick={() => changeLanguage('es')}>SPANISH</button>
      <h1>{t('g_title')}</h1>
      <p>{t('g_detail')}</p> 
      <br/>
      <h1>{t('o_title')}</h1>
      <p>{t('o_detail')}</p> 
      <br/>
      <h1>{t('s_title')}</h1>
      <p>{t('s_detail')}</p> 
      <br/>
      <h1>{t('p_title')}</h1>
      <p>{t('p_detail')}</p> 
      <br/>
      <h1>{t('e_title')}</h1>
      <p>{t('e_detail')}</p> 
      <br/>
      <h1>{t('l_title')}</h1>
      <p>{t('l_detail')}</p> 
      <br/>
    </div>
  )
}
