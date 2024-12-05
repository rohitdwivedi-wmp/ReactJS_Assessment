import React, { useState } from 'react';
import PostDropdown from './PostDropdown';
import PostDetails from './PostDetails';
import { fetchPostById } from '../../../services/axios-interceptor';
import { toast } from 'react-toastify'

const PostSelector = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    /**
     * Select Post Function 
     * @param {number} postId 
     * @returns none
     */
    const handleSelectPost = (postId) => {
        if (!postId) {
            setSelectedPost(null);
            return;
        }
        fetchPostById(postId)
            .then((data) => setSelectedPost(data))
            .catch((err) => toast.error("Failed to fetch post details:", err));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[var(--main-gradient-purple)] via-lime-200 to-[var(--main-gradient-aqua)] p-4 text-white">
            <div className='relative bottom-24'>
                <h1 className="b-20px text-4xl font-bold mb-6 text-center text-black shadow-md drop-shadow-lg">
                    Post Selector
                </h1>
                <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 text-gray-800">
                    {/* Post Dropdown for selection */}
                    <PostDropdown onSelectPost={handleSelectPost} />

                    {/* Shows Selected Post */}
                    <PostDetails post={selectedPost} />
                </div>
            </div>          
        </div>
    );
};

export default PostSelector;
