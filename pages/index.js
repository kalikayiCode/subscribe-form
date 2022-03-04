import styles from '../styles/Home.module.css'
import ClassCompForm from './subscribeForm/ClassCompForm'
import FunctionCompForm from './subscribeForm/FunctionCompForm'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <FunctionCompForm /> */}
      <ClassCompForm/>
    </div>
  )
}
