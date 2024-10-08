import Link from "next/link";

import styles from "./Header.module.css";

type HeaderProps = {
    page: string
}

export function Header({ page }: HeaderProps) {
    return <>
        <div className={styles.header_wrapper}>
            <div className="">
                <h1 className="">
                        Tchau Dengue
                </h1>

            </div>
            <div className="">
                <Link
                    className={styles.sign_in}
         
                    href="/signin">Sign in</Link>
                <Link
                className={styles.register} 
                href="/register">Register</Link>
            </div>

        </div>
    </>

}