import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import PageHeader from '../layout/PageHeader';

export default function Home() {
  return (
    <div className={styles.container}>
      <PageHeader/>
    </div>
  )
}
