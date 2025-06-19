import { Link } from "react-router-dom";


const BranchCard = ({ page, stories }) => {
  const { title, question, answer, parentPage, storyId } = page;
  const cleanHtmlTitle = (htmlString) => {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.textContent || div.innerText || '';
  };

  const findPageInStory = (rootNode, id) => {
    if (!rootNode) return null;
    if (rootNode._id === id) return rootNode;
    if (rootNode.children) {
      for (const child of rootNode.children) {
        const found = findPageInStory(child, id);
        if (found) return found;
      }
    }
    return null;
  };

  let parentTitle = 'Cargando...';
  if (parentPage) {
    const currentStory = stories.find(s => s._id === storyId._id);
    if (currentStory && currentStory.rootPage) {
      const resolvedParentPage = findPageInStory(currentStory.rootPage, parentPage);
      if (resolvedParentPage) {
        parentTitle = cleanHtmlTitle(resolvedParentPage.title);
      } else {
        parentTitle = 'No encontrada';
      }
    }
  } else {
    parentTitle = 'Página Raíz';
  }

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Página: <span className="mt-3" dangerouslySetInnerHTML={{ __html: title }}></span></h5>

        <p className="mb-1">
          <>Página Padre: <span className="mt-3">{parentTitle}</span></>
        </p>

        {question && (
          <p className="mb-1">
            <strong>Pregunta:</strong> <a href="#">{question}</a>
          </p>
        )}

        {answer && (
          <p className="mb-1">
            <strong>Respuesta:</strong> <span className="text-success">"{answer}"</span>
          </p>
        )}

        <p className="text-muted mb-2">
          Historia: <Link to={`/story/${storyId._id}`}>{page.storyId.title}</Link>
        </p>

        <div className="d-flex gap-3 flex-wrap">
          <Link className="btn btn-outline-primary btn-sm" to={`/story/${page.storyId._id}/page/${page._id}`}>
            <i className="bi bi-eye" /> Leer
          </Link>
          <Link className="btn btn-outline-success btn-sm" to={`/story/${page.storyId._id}/page/${page._id}/create`}>
            <i className="bi bi-feather" /> Continuar Creando
          </Link>
          <Link className="btn btn-outline-secondary btn-sm" to={`/story/${page.storyId._id}/page/${page._id}/branch-view`}>
            <i className="bi bi-diagram-3"></i> Ver Ramificación
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;