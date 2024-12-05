import React from 'react';

const PostDetails = ({ post }) => {
    if (!post) return null;

    return (
        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow">
            <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.body}</p>
        </div>
    );
};

export default PostDetails;
