export function Footer() {
    return (
        <section>
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
            <footer>
                <section className="footer-container">
                    <div className="footer-txt">
                        <h5>mytem</h5>
                        <div className="flex txt-gap">
                            <p style={{color:'#fff'}}>home</p>
                            <p style={{color:'#fff'}}>about</p>
                        </div>
                        <address>
                            987 Hillcrest Lane<br />
                            Irvine, CA<br />
                            California 92714
                        <p>Call Us: 949-833-7432</p>
                        </address>
                        <div className="social-icons">
                        <a href="https://twitter.com/fiverr"> <img src="/img/twitter.png" alt="" /></a>
                            <a href="https://www.facebook.com/Fiverr/"> <img src="/img/facebook.png" alt="" /></a>
                            <a href="https://www.linkedin.com/company/fiverr-com"><img src="/img/linkedin.png" alt="" /></a>
                        </div>
                        <p>Copyright 2020. All Rights Reserved</p>
                    </div>
                </section>
            </footer>
        </section>
    )
}