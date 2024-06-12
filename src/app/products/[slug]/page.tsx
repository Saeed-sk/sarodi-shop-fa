import {Fragment} from "react";

export default function IndexPage({params}: { params: { slug: string } }) {

    return (
        <Fragment>
            <section className={"max-w-[100vw] "}>
                {params.slug}صفحه وبلاگ
            </section>
        </Fragment>
    );
}
