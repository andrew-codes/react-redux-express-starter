import React from 'react';

export default ({match}) => (
    <div>
        <span>Topic {match.params.topicId}</span>
    </div>
)