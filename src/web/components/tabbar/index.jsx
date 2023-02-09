import React from 'react';
import {WedaVueWrapper} from '@tcwd/vuera';
import tabbar from './tabbar.vue';

export default function Tabbar(props) {
    return (
        <WedaVueWrapper
            component={tabbar}
            {...props}
        />
    );
}
