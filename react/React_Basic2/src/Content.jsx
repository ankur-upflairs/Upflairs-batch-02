import React from 'react'

function Content() {
    return (
        <div id="content">
            <div id="content-inner">

                <main id="contentbar">
                    <div className="article">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate tempore totam facere vero. Culpa a, ipsa iusto vitae nam illum incidunt dolorem laudantium at rerum id sunt quia quis!
                            
                        </p>
                    </div>
                </main>

                <nav id="sidebar">
                    <div className="widget">
                        <h3>Left heading</h3>
                        <ul>
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                            <li><a href="#">Link 4</a></li>
                            <li><a href="#">Link 5</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="clr"></div>
            </div>
        </div>
    )
}

export default Content
