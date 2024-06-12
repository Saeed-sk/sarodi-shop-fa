import {Fragment} from "react";
import {Thumbnail} from "@/components/home/thumbnail";
import {homeApi} from "@/api/home";
import Link from "next/link";

export default function IndexPage() {
    const pageData = homeApi();
    return (
        <Fragment>
           صفحه درباره ما
        </Fragment>
    );
}
