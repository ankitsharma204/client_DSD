const BreadCrumb = ({title, subTitle}) => {
    return(
        <section className="page-header">
            <div className="page-header__bg"
                style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg-img.jpg)'}}></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="page-header__inner">
                            <h2 className="page-header__title">{subTitle}</h2>
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><a href="index.html">{title}</a></li>
                                <li><a href="projects.html">{subTitle}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BreadCrumb;