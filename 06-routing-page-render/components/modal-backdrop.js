"use client";

import { useRouter } from "next/navigation";

function ModalBackDrop() {
  const router = useRouter();
  return <div className="modal-backdrop" onClick={router.back} />;
}
export default ModalBackDrop;
