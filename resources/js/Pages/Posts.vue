<script>
import MainNavLayout from '@/Layouts/MainNavLayout.vue';
import { Head, Link, usePage } from '@inertiajs/vue3';

import Magnify from 'vue-material-design-icons/Magnify.vue'
import TelevisionPlay from 'vue-material-design-icons/TelevisionPlay.vue'
import StorefrontOutline from 'vue-material-design-icons/StorefrontOutline.vue'
import AccountGroup from 'vue-material-design-icons/AccountGroup.vue'
import AccountMultiple from 'vue-material-design-icons/AccountMultiple.vue'
import Flag from 'vue-material-design-icons/Flag.vue'
import ClockTimeTwoOutline from 'vue-material-design-icons/ClockTimeTwoOutline.vue'
import Restore from 'vue-material-design-icons/Restore.vue'
import VideoImage from 'vue-material-design-icons/VideoImage.vue'
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue'

const user = usePage().props.auth.user

export default {
    components: {
        Magnify,
        TelevisionPlay,
        StorefrontOutline,
        AccountGroup,
        AccountMultiple,
        Flag,
        ClockTimeTwoOutline,
        Restore,
        VideoImage,
        DotsHorizontal,
        MainNavLayout,
        Head,
        Link
    },
    data() {
        return {
            user
        }
    }
}
</script>

<template>
    <Head title="Posts" />

    <MainNavLayout>
        <div class="fixed w-full h-[100%] bg-[#F1F2F5]">
            <div class="grid grid-rows-3 grid-flow-col w-full max-w-[1600px] mt-[56px] h-[calc(100%-56px)] mx-auto px-4">
                <div id="LeftSection" class="xl:w-[345px] lg:block hidden">
                    <div class="pt-4 max-w-[320px] pr-4">
                        <Link href="/" class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] p-2 rounded-md">
                            <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/237/200/300">
                            <div class="text-[15px] text-gray-800 font-extrabold pl-3">balbalba</div>
                        </Link>

                    </div>

                </div>
            </div>

        </div>
    </MainNavLayout>

    
</template>
