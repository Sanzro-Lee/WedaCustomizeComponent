import React from 'react';
import {WedaVueWrapper} from '@tcwd/vuera';
import video from './video.vue';

export default function Video(props) {
    return (
        <WedaVueWrapper
            component={video}
            {...props}
        />
    );
}
