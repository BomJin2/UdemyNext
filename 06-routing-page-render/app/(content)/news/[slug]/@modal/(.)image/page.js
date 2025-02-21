import ModalBackDrop from "@/components/modal-backdrop";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackDrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
export default InterceptedImagePage;
