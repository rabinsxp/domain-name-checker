import { useState } from "react";
import styles from "./DomainChecker.module.css";
import { FaSpinner } from "react-icons/fa";

interface ApiResponse {
    success: boolean;
    message: string;
    price?: number;
}

export default function DomainChecker() {
    const [domain, setDomain] = useState("");
    const [result, setResult] = useState<ApiResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsLoading(true);

        const apiKey = process.env.NEXT_PUBLIC_HOSTMARIO_API_KEY;
        const url = `https://api.hostmario.com/v1/udc/?api_key=${apiKey}&domain=${domain}`;
        const response = await fetch(url);
        const data: ApiResponse = await response.json();

        setResult(data);
        setIsLoading(false);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                {/* <h1>Domain Availability Checker</h1> */}
                {/* <p>Enter a domain name to check its availability</p> */}
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        placeholder="example.com"
                        value={domain}
                        onChange={(event) => setDomain(event.target.value)}
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>
                        Check Availability
                    </button>
                </div>
            </form>

            {isLoading ? (
                <div className={styles.spinnercontainer}>
                    <FaSpinner className={styles.spinner} />
                </div>
            ) : result ? (
                <div className={styles.resultContainer}>
                    <div
                        className={
                            result.success ? styles.available : styles.unavailable
                        }
                    >
                        <p className={styles.message}>{result.message}</p>
                        {result.success && (
                            <p className={styles.price}>Price: {result.price}</p>
                        )}
                        {result.success && (
                                <button className={styles.registerButton}>Register Now</button>
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
