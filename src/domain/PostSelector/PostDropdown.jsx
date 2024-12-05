import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../../../services/axios-interceptor';

const PostDropdown = ({ onSelectPost }) => {

    // State to hold the fetched posts
    const [posts, setPosts] = useState([]);

    // useEffect hook to fetch posts when the component is mounted
    useEffect(() => {
        fetchPosts()
            .then((data) => setPosts(data))
            .catch((err) => console.error("Failed to fetch posts:", err));
    }, []);

    return (
        <div className="w-full">
            <select
                onChange={(e) => onSelectPost(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
                <option value="">Select a Post</option>
                {posts.map((post) => (
                    <option key={post.id} value={post.id}>
                        {post.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PostDropdown;
