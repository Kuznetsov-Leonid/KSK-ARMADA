import styles from '../styles/Home.module.scss';
import BlogComponent from '../components/blog/blogComponent';
const Blog = () => {
    return(
        <>
            <main className={styles.main}>
                <BlogComponent/>
            </main>
        </>
    );
}

export default Blog;