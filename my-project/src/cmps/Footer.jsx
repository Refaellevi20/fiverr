export function Footer() {
    return (
        <section >
            <footer>
                <div style={{ backgroundColor: '#f67e7e' }}>

                    <div className="img-left-footer">
                        <img src="images/bg-pattern-home-6-about-5.svg" alt="" style={{ float: 'left', marginTop: '56px' }} />
                    </div>
                    <div className="top-footer">
                        <h5>Ready to get started?</h5>
                        <button className="button-footer">contact us</button>
                    </div>
                </div>
            </footer>
            <footer className="main-layout">
                <section className="footer-container">
                    <div className="footer-txt">
                        <main className="main-footer" >
                            <div style={{display:'block'}}>
                            <h5>mytem</h5>
                            <div className="flex txt-gap navigation">
                                <p style={{ color: '#fff' }}>home</p>
                                <p style={{ color: '#fff' }}>about</p>
                                </div>
                                <div className="social-icons-tablet">
                                    <a href="https://github.com/Refaellevi20/my-home-project"> <img src="/images/github.webp" alt="" style={{width:'24px',height: '20px', borderRadius: '50%'}}/></a>
                                    <a href="https://www.facebook.com/Fiverr/"> <img src="/images/facebook.png" alt="" /></a>
                                    <a href="https://www.linkedin.com/company/fiverr-com"><img src="/images/linkedin.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="loction">
                                <address>
                                    987 Hillcrest Lane<br />
                                    Irvine, CA<br />
                                    California 92714
                                    <p>Call Us: 949-833-7432</p>
                                </address>
                                <div className="social-icons">
                                    <a href="https://github.com/Refaellevi20/my-home-project"> <img src="/images/github.webp" alt="" /></a>
                                    <a href="https://www.facebook.com/Fiverr/"> <img src="/images/facebook.png" alt="" /></a>
                                    <a href="https://www.linkedin.com/company/fiverr-com"><img src="/images/linkedin.png" alt="" /></a>
                                </div>
                                <p className="bottom-footer-txt" style={{ margin: '15px  0 50px' }}>Copyright 2020. All Rights Reserved</p>
                            </div>
                        </main>
                    </div>
                </section>
            </footer>
        </section>
    )
}