const buildPageTree = (pages) => {
    const pageMap = {};
    const roots = [];

    pages.forEach(page => {
        page.children = [];
        pageMap[page._id] = page;
    });

    pages.forEach(page => {
        if (page.parentPage) {
            const parent = pageMap[page.parentPage];
            if (parent) {
                parent.children.push(page);
            }
        } else {
            roots.push(page);
        }
    });

    return roots;
}

export default buildPageTree