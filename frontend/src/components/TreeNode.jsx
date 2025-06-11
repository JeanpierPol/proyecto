const  TreeNode =({ node })=> {
    return (
        <li>
            <span
                className="highlighted"
                dangerouslySetInnerHTML={{ __html: node.title }}
            />
            {node.children && node.children.length > 0 && (
                <ul>
                    {node.children.map((child, idx) => (
                        <TreeNode node={child} key={idx} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default TreeNode
