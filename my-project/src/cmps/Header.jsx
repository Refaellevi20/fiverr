

export function Header() {

    return (
        <section className="top-section-header main-layout">
        <header >
            <div className="header-container">
                <div className="header-top" >
                    <div className="grouped-elements-header">
                        <h1 className="header-logo">myteam</h1>
                        <div className="header-link">home</div>
                        <div className="header-link">about</div>
                    </div>
                    <button className="button-header">contact us</button>
                    {/* background-color: #f67e7e; */}
                </div>
            </div>
            <div className="middle-header">
                {/* <img src="/images/bg-pattern-about-4.svg" alt="" className="top-img"/> */}
              
                <div className='' >
                
                    <p className="find-header">Find the best <span className="color-orange">talent</span></p>
                </div>
              
                <p className="long-txt-header"> <p className="empty-txt"></p> Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that. </p>
              
            
            </div>
            <img src="/images/bg-pattern-home-2.svg" alt="header-bull" className="header-bull-button" style={{float: 'right',bottom: '244px',position: 'absolute',right:'100px'}}/>


        </header >
        </section>
    )
}