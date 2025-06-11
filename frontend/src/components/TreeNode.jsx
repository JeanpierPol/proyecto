const TreeNode = ({ node }) => {
    return (
        <li>
            <div>
                {node.answer && (
                    <div className="mb-1 text-muted">
                        <em> {node.answer}</em>
                    </div>
                )}
                
                <span
                    className="highlighted"
                    dangerouslySetInnerHTML={{ __html: node.title }}
                />
            </div>

            {node.question && (
                <div className="mb-2 fw-bold">{node.question}</div>
            )}



            {node.children && node.children.length > 0 && (
                <ul>
                    {node.children.map((child, idx) => (
                        <TreeNode node={child} key={idx} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default TreeNode;
