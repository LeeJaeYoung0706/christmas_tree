import Image from 'next/image'
import styles from './page.module.css';
import CustomButton from "@/components/buttons/CustomButton";
import Header from "@/components/layouts/Header";

export default function Home() {
  return (
      <>
         <Header />
          {/*TEST*/}
          <div className={styles.mainImage}>
            <Image src={'/snow-background.gif'} alt={''} fill />
          </div>
          <div className={styles.mainImage2}>
              <Image src={'/Christmas-Tree.png'} alt={''} width={700} height={1200} style={{marginLeft: 400}} />
          </div>
      </>
  )
}
