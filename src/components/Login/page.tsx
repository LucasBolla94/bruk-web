import Form from "next/form";
import styles from "./page.module.css";

export default function Login() {
    return(
        <div>
            <Form action="" className={styles.formLogin}>
                <input name="email" placeholder="Email" type="email" required className={styles.input}/>
                <input type="password" name="password" placeholder="Password" required className={styles.input} />
                <button type="submit" className={styles.button}>Login</button>
            </Form>
        </div>
    );
}