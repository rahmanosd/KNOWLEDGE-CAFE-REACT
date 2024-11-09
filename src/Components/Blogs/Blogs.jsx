import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({handleAddToBook, markAsReadingTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
        <h3 className="text-4xl">blogs : {blogs.length}</h3>
        {
          blogs.map(blog =>
          <Blog key={blog.id} 
          handleAddToBook={handleAddToBook}
          markAsReadingTime={markAsReadingTime}
          blog={blog}>
        </Blog>)
        }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBook: PropTypes.func,
    markAsReadingTime: PropTypes.func
}

export default Blogs;