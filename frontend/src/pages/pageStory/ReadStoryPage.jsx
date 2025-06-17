import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import Loading from "../../components/Loading";
import FooterPage from "../../components/footer/FooterPage";
import Modal from "../../components/modal/Modal";
const ReadStoryPage = () => {
    const { pageId } = useParams();
    const { getPage, pages, loading } = usePage();
    const closeRef = useRef();

    useEffect(() => {
        if (pageId) {
            getPage(pageId)
        }
    }, [pageId])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <div className="container">
                <div dangerouslySetInnerHTML={{ __html: pages.title }}></div>
                <div className="mt-3" dangerouslySetInnerHTML={{ __html: pages.content }}></div>
            </div>
            <div className="bg-primary">

                <Modal modalTarget="modalNextChapter" modalTitle="Elija una opcion">
                    {pages?.question && <p>{pages.question}</p>}

                    {Array.isArray(pages?.children) && pages.children.length > 0 ? (
                        pages.children.map(posibility => (
                            <Link
                                key={posibility._id}
                                type="button"
                                className="btn btn-primary ms-3"
                                to={`/story/${posibility.storyId}/page/${posibility._id}`}
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={() => { closeRef.current.click() }}
                            >
                                {posibility.answer}
                            </Link>

                        ))
                    ) : (
                        <p>No hay opciones disponibles</p>
                    )}
                </Modal>

                <FooterPage

                    contentStart={
                        pages?.parentPage &&
                        <Link to={`/story/${pages.storyId}/page/${pages.parentPage}`} className="text-white">
                            <i className="bi bi-arrow-left" />
                        </Link>
                    }

                    contentCenter={
                        <Link to={`/story/${pages.storyId}`} className="text-white">
                            <i className="bi bi-house" />
                        </Link>
                    }
                    contentEnd={
                        pages.question ? (
                            <i className="bi bi-arrow-right text-white" data-bs-toggle="modal" data-bs-target="#modalNextChapter" />
                        ) : (
                            Array.isArray(pages.children) && pages.children.length > 0 ? (
                                <Link to={`/story/${pages.storyId}/page/${pages.children[0]._id}`} className="text-white">
                                    <i className="bi bi-arrow-right text-white" />
                                </Link>
                            ) : null
                        )
                    }

                />

            </div>

        </>
    )
}

export default ReadStoryPage