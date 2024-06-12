import React from 'react';
import {NavLogo} from "@/components/icons/navbar/navLogo";
import {Shopping} from "@/components/icons/navbar/shopping";
import {LikeIcon} from "@/components/icons/navbar/like";
import {Profile} from "@/components/icons/navbar/profile";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

interface PageProps {
    name: string,
    classes: string
}

function IconCall({name, classes}: PageProps) {
    let DynamicComponent;
    switch (name) {
        case "navLogo":
            DynamicComponent = NavLogo
            break;
        case "like":
            DynamicComponent = LikeIcon
            break;
        case "profile":
            DynamicComponent = Profile
            break;
        case "shopping":
            DynamicComponent = Shopping
            break;
        case "homeSliderNext":
            DynamicComponent = MdNavigateNext
            break;
        case "homeSliderPrev":
            DynamicComponent = GrFormPrevious
            break;
        default:
            DynamicComponent = "IconErr"
    }
    return (
        < >
            <DynamicComponent className={classes}/>
        </>
    );
}

export default IconCall;
