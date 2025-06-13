import React from 'react';

const TreeNode = ({ node, question }) => {
    if (!node || !node.title) {
        return null;
    }
    console.log(node)

    return (
        <li>
            <p>{node.answer}</p>
            <div className="node-content">
                <span dangerouslySetInnerHTML={{ __html: node.title }} />
            </div>
            <p>{node.question}</p>

            {node.children && node.children.length > 0 && (
                <ul>
                    
                    {node.children.map((childNode, index) => (
                        <TreeNode
                            key={childNode._id || index}
                            node={childNode}
                            question={childNode}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default TreeNode;