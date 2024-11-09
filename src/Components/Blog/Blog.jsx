import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBook, markAsReadingTime}) => {
    const {cover, title, author_img, author, posted_date, reading_time, hashtags, id} = blog
    return (
        <div className="space-y-5">
        {<img className="w-full mb-8" src={cover} alt={`Cover picture of the title${title}`}/>}
        <div className="flex justify-between mb-4">
        <div className="flex">
        <img className="w-14" src={author_img} alt="" />
        <div className="ml-6">
            <h2 className="text-2xl">{author}</h2>
            <p>{posted_date}</p>
        </div>
        </div>
        <div>
         <span className="text-xl">{reading_time} read</span>
         <button onClick={() => handleAddToBook(blog)} 
         className="text-red-700 ml-2 text-xl">
         <FaBookmark></FaBookmark></button>
        </div>
        </div>
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p>
        {
        hashtags.map((hash, idx) => <span key={idx}>
        <a href="">{hash}</a>
        </span>)
        }
        </p>
        <button onClick={() => markAsReadingTime(id, reading_time)} className="text-purple-800 underline font-bold">
        Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBook: PropTypes.func,
    markAsReadingTime: PropTypes.func
}
export default Blog