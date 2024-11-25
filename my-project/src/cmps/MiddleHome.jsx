

export function MiddleHome() {

    return (
        <section  className="flex " >
            <section className="middle-container">
                <div className="flex-middle">
                {/* <img src="/images/bg-pattern-about-4.svg" alt="" className="img-middle-svg" /> */}

                    <div className="middle-left">
                        <p className="empty-txt-middle"></p>
                        <p className="middle-left-txt">Build & manage distributed teams like no one else.</p>
                    </div>
                    <section>
                        <div className="flex">
                            <div className="">
                                <img src="/images/icon-person.svg" alt="" className="img-middle" />
                            </div>
                            <div className="txt-middle">
                                <h2 className="color-orange">Experienced Individuals</h2>
                                <p>Our network is made up of highly experienced professionals <br /> who are passionate about what they do.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="">
                                <img src="/images/icon-cog.svg" alt="" className="img-middle" />
                            </div>
                            <div className="txt-middle">
                                <h2 className="color-orange">Easy to Implement</h2>
                                <p>Our processes have been refined over years of implementation <br /> meaning our teams always deliver.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="">
                                <img src="/images/icon-chart.svg" alt="" className="img-middle" />
                            </div>
                            <div className="txt-middle">
                                <h2 className="color-orange">Enhanced Productivity</h2>
                                <p>Our customized platform with in-built analytics helps you <br /> manage your distributed teams.</p>
                            </div>
                        </div>

                    </section>

                </div>

            </section>
            <div className="middle-bull-left full">
            </div>
        </section>
    )
}