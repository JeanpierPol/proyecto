import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import Loading from "../../components/Loading";
import FooterPage from "../../components/footer/FooterPage";
import Modal from "../../components/modal/Modal";
const ReadStoryPage = () => {
    const { pageId } = useParams();
    const { getPage, pages, loading } = usePage();

    useEffect(() => {
        if (pageId) {
            getPage(pageId)
        }
    }, [pageId])

    if (loading) {
        return <Loading />
    }
    console.log(pages)

    return (
        <>
            <div className="container">
                <div dangerouslySetInnerHTML={{ __html: pages.title }}></div>
                <div className="mt-3" dangerouslySetInnerHTML={{ __html: pages.content }}></div>
            </div>
            <div className="bg-primary">
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

                        ""
                    }
                />
                <i className="bi bi-arrow-right text-white" data-bs-toggle="modal" data-bs-target="#modalNextChapter" />
                
                <Modal modalTarget="modalNextChapter" modalTitle='Elija una opcion'>

                </Modal>

            </div>

        </>
    )
}

export default ReadStoryPage