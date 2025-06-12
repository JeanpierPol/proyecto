import React from 'react';

const TreeNode = ({ node }) => {
    if (!node || !node.title) {
        return null;
    }

    return (
        <li>
            <div className="node-content">
                <span dangerouslySetInnerHTML={{ __html: node.title }} />
            </div>

            {node.children && node.children.length > 0 && (
                <ul>
                    {node.children.map((childNode, index) => (
                        <TreeNode
                            key={childNode._id || index}
                            node={childNode}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default TreeNode;