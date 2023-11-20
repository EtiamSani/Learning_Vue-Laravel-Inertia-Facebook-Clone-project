import { defineStore } from "piania";

export const useGeneralStore = defineStore("general", {
    state: () => ({
        isPostOverlay: false,
        isCropperModal: false,
        isImageDisplay: null,
    }),
    persist: true,
});
