"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/model";

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
          title="Create store"
          description="Add a new store to manage products and categories."
          isOpen={storeModal.isOpen} 
          onClose={storeModal.onClose}
        >
            Futer Store
        </Modal>
    );

}