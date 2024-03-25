/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import placeholder from '../../../assets/404.jpg'

const Blog = ({ item }) => {
    const { title, description, cover_image, published_at, id } = item;
    return (
        <Link to={`/singleBlog/${id}`} rel="noopener noreferrer" className="max-w-sm border-opacity-30 transition border-2 hover:scale-105 border-primary hover:border-secondary mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholder} />
            <div className="p-6 space-y-2 bg-gray-600">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default Blog;