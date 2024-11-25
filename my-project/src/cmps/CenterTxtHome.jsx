

export function CenterTxtHome() {

    return (

        <section className="center-container-all">
            <div className="middle-bull-right" style={{ backgroundColor: '#004047' }}>

                <img src="images/bg-pattern-home-4-about-3.svg" alt="" className="img-middle-svg-center" />
            </div>
            <section className="center-txt-container">

                <section className="" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',

                }}>
                    <h3>Delivering real results for top companies. Some of our <span className="color-header">success stories.</span></h3>
                </section>
                <section className="main-layout section-container">
                    <section className="flex-row ">
                        <div style={{marginTop: '80px'}}>
                            <div style={{ position: 'relative' }}>
                                <img
                                    src="/images/icon-quotes.svg"
                                    alt="quotes"

                                />
                                <p
                                    style={{
                                        position: 'absolute',
                                        marginTop: '-1.875em'
                                    }}
                                >
                                    “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
                                </p>
                            </div>
                            <div style={{ marginTop: '6.25em' }}>
                                <h4>Kady Baker</h4>
                                <p>Product Manager at Bookmark</p>
                                <img src="/images/avatar-kady.jpg" alt="Avatar" className="img-center" />
                            </div>
                        </div>
                        <div>
                            <div style={{ position: 'relative' }}>
                                <img
                                    src="/images/icon-quotes.svg"
                                    alt="quotes"

                                />
                                <p
                                    style={{
                                        position: 'absolute',
                                        marginTop: '-1.875em'
                                    }}
                                >
                                    “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                            </div>
                            <div style={{ marginTop: '6.25em' }}>
                                <h4>Aiysha Reese</h4>
                                <p>Product Manager at Bookmark</p>
                                <img src="/images/avatar-aiysha.jpg" alt="Avatar" className="img-center" />
                            </div>
                        </div>
                        <div>
                            <div style={{ position: 'relative' }}>
                                <img
                                    src="/images/icon-quotes.svg"
                                    alt="quotes"

                                />
                                <p
                                    style={{
                                        position: 'absolute',
                                        marginTop: '-1.875em'
                                    }}
                                >
                                    “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                            </div>
                            <div style={{ marginTop: '6.25em' }}>
                                <h4>Arthur Clarke</h4>
                                <p>Product Manager at Bookmark</p>
                                <img src="/images/avatar-arthur.jpg" alt="Avatar" className="img-center" />
                            </div>
                            
                        </div>
                        
                    </section>

                </section>
                <img src="/images/bg-pattern-home-5.svg" alt="Avatar" className="img-end" style={{marginTop:'-24px',textAlign:'end'}}/>

            </section>

        </section>
    )
}